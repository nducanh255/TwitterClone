import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import colors from './colors'

export default function PostButton({navigation}){
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Post')}
        >
            <Feather name={'plus'} color={'white'} size={28}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        right: 10, 
        bottom: 10, 
        zIndex: 1,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: colors.lightblue,
        justifyContent: 'center',
        alignItems: 'center'
    }
})