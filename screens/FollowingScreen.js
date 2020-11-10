import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import colors from '../components/colors'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function FollowingScreen({navigation}){
    const user = useSelector(state => state.user)

    const [following, setFollowing] = useState([])

    const handleFollow = (fid) => {
        axios.post('http://localhost:3000/following', {type: 'FOLLOW', uid : user.id, fid: fid})
        .then(json => setFollowing(json.data))
    }

    const handleUnfollow = (fid) => {
        axios.post('http://localhost:3000/following', {type: 'UNFOLLOW', uid : user.id, fid: fid})
        .then(json => setFollowing(json.data))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/following/' + user.login)
        .then(json => setFollowing(json.data))
    })

    //console.log(following)

    return(
        <View style={styles.container}>
            <FlatList 
                data={following}
                renderItem={({item}) => (
                    <View style={[styles.row, {width: '90%', justifyContent: 'space-between', margin: 6}]}>
                        <View style={styles.row}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Profile')}
                            >
                                <Image
                                    style={styles.avatar}
                                    source={require('../assets/twitter_avatar.png')}
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                                <Text style={{color: 'white', fontSize: 14}}>{'@' + item.login}</Text>
                            </View>
                        </View>
                        {
                            item.isFollowing ?
                            <TouchableOpacity
                                onPress={() => handleUnfollow(item.id)}
                            >
                                <View style={styles.followingButton}>
                                    <Text style={{color: 'white', fontWeight: 'bold'}}>Following</Text>
                                </View>
                            </TouchableOpacity> :
                            <TouchableOpacity
                                onPress={() => handleFollow(item.id)}
                            >
                                <View style={styles.followButton}>
                                    <Text style={{color: colors.lightblue, fontWeight: 'bold'}}>Follow</Text>
                                </View>
                            </TouchableOpacity>
                        }
                </View>
                )}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkblue
    },
    avatar: {
        backgroundColor: 'white', 
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    followingButton: {
        backgroundColor: colors.lightblue,
        width: 80, 
        height: 30, 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: -10
    },
    followButton: {
        width: 60, 
        height: 30, 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: colors.lightblue
    }
})