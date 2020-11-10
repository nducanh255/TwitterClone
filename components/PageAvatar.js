import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function PageAvatar({navigation}){
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('HomeTab')}
        >
            <Image
                style={[styles.avatar, {width: 45, height: 45}]}
                source={require('../assets/twitter_avatar.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avatar: { 
        backgroundColor: 'white', 
        borderRadius: 50,
        marginLeft: 15
    }
})