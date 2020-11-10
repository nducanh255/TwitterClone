const express = require('express')
const bodyParser = require('body-parser')
const redis = require('redis')

const app = express()
const port = 3000

let client = redis.createClient()

client.on('connect', () => {
    console.log('Connect to Redis')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello, world</h1>')
})

app.post('/signup', (req, res) => {
    let user = req.body
    //console.log(JSON.stringify(user))
    hmsetRedis('user:' + user.id, user)
    hsetRedis('users:', user.login, user.id)
})

app.get('/login/:name', async (req, res) => {
    let name = req.params.name
    let id = ''
    await hmgetRedis('users:', name).then(val => id = val)
    hgetallRedis('user:' + id).then(val => res.json(val))
})

app.post('/compose/tweet', async (req, res) => {
    let status = req.body

    // Create a status message
    let user = {}
    //await getRedis('user:' + status.login).then(val => user = JSON.parse(val))
    await hgetallRedis('user:' + status.uid).then(val => user = val)
    zaddRedis('profile:' + user.id, +new Date(), status.id).then(val => res.json(val))
    hmsetRedis('status:' + status.id, status)
    hincrbyRedis('user:' + user.id, 'posts', 1)

    // Fan out to all followers
    let followers = []
    await zrangeRedis('followers:' + user.id, 0, -1).then(val => followers = val)
    for(let i = 0; i < followers.length; i++){
        zaddRedis('home:' + followers[i], +new Date(), status.id)
    }
})

app.get('/home/:id', async (req, res) => {
    let id = req.params.id

    let statusId = []
    await zrevrangeRedis('home:' + id, 0, -1).then(val => statusId = val)
    let statusMessage = []
    for(let i = 0; i < statusId.length; i++){
        await hgetallRedis('status:' + statusId[i]).then(val => statusMessage[i] = val)
    }
    res.json(statusMessage)
})

app.get('/following/:name', async (req, res) => {
    let name = req.params.name
    let id = ''
    // Get all users from Redis
    let userNames = []
    let users = []
    await hkeysRedis('users:').then(val => userNames = val)
    await hgetallRedis('users:').then(val => users = val)
    id = users[name]
    for(let i = 0; i < userNames.length; i++){
        await hgetallRedis('user:' + users[userNames[i]]).then(val => userNames[i] = val)
    }
    users = userNames
    users = users.filter(user => user.login !== name)

    // Map all users following to user
    users = users.map(user => ({...user, isFollowing: false}))
    let following = []
    await zrangeRedis('following:' + id, 0, -1).then(val => following = val)
    for(let i = 0; i < users.length; i++){
        for(let j = 0; j < following.length; j++){
            if (users[i].id == following[j]){
                users[i].isFollowing = true
            }
        }
    }
    res.json(users)
})

app.post('/following', (req, res) => {
    let type = req.body.type
    let uid = req.body.uid
    let fid = req.body.fid

    if(type === 'FOLLOW'){
        // User A follow user B, add B to A's following list
        zaddRedis('following:' +uid, +new Date(), fid)
        hincrbyRedis('user:' + uid, 'followings', 1)
        // Then add B to A's followers list
        zaddRedis('followers:' +fid, +new Date(), uid)
        hincrbyRedis('user:' + fid, 'followers', 1)
    }
    if(type === 'UNFOLLOW'){
        // User A follow user B, add B to A's following list
        zremRedis('following:' +uid, fid)
        hincrbyRedis('user:' + uid, 'followings', -1)
        // Then add B to A's followers list
        zremRedis('followers:' +fid, uid)
        hincrbyRedis('user:' + fid, 'followers', -1)
    } 
})

const getRedis = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

const setRedis = (key, str) => {
    return new Promise((resolve, reject) => {
        client.set(key, str, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

//zaddRedis('key', 123, 'bar')
const zaddRedis = (key, foo, bar) => {
    return new Promise((resolve, reject) => {
        client.zadd(key, foo, bar, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

const zrangeRedis = (key, start, stop) => {
    return new Promise((resolve, reject) => {
        client.zrange(key, start, stop, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

//client.zrevrange
const zrevrangeRedis = (key, start, stop) => {
    return new Promise((resolve, reject) => {
        client.zrevrange(key, start, stop, (err, val) => {
            if(!err) {
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

const zremRedis = (key, member) => {
    return new Promise((resolve, reject) => {
        client.zrem(key, member, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

const hsetRedis = (key, field, value) => {
    return new Promise((resolve, reject) => {
        client.hset(key, field, value, (err, val) => {
            if (!err) {
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

const hmsetRedis = (key, obj) => {
    return new Promise((resolve, reject) => {
        client.hmset(key, obj, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        }) 
    })
}

const hmgetRedis = (key, field) => {
    return new Promise((resolve, reject) => {
        client.hmget(key, field, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        }) 
    })
}

const hkeysRedis = (key) => {
    return new Promise((resolve, reject) => {
        client.hkeys(key, (err, val) => {
            if(!err){
                resolve(val)
            } else{
                reject(err)
            }
        })
    })
}

const hgetallRedis = (key) => {
    return new Promise((resolve, reject) => {
        client.hgetall(key, (err, val) => {
            if(!err){
                resolve(val)
            } else{
                reject(err)
            }
        })
    })
}

const hincrbyRedis = (key, field, increment) => {
    return new Promise((resolve, reject) => {
        client.hincrby(key, field, increment, (err, val) => {
            if(!err) {
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

app.listen(port, () => {
    console.log('Server listened on port 3000')
})