import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function Avatar(props){
    return(
        <TouchableOpacity 
            onPress={() => props.openDrawer ? props.navigation.openDrawer() : props.navigation.navigate('Profile')}
        >
            <Image
                style={[styles.avatar, {width: 35, height: 35}]}
                source={require('../assets/twitter_avatar.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avatar: { 
        backgroundColor: 'white', 
        borderRadius: 50,
        marginLeft: 15,
        width: 35,
        height: 35
    }
})