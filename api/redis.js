const redis = require('redis')

let client = redis.createClient()

client.on('connect', () => {
    console.log('Connect to Redis')
})

const getRedis = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, val) => {
            if(!err){
                resolve(val)
            }
        })
    })
}

// const getRedis = (key) => {
//     return new Promise((resolve, reject) => {
//         client.get(key, (err, val) => {
//             if(!err){
//                 resolve(val)
//             }
//         })
//     })
// }

const setRedis = (key, item) => {
    return new Promise((resolve, reject) => {
        client.set(key, item, (err, val) => {
            if(!err){
                resolve(val)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { getRedis, setRedis }