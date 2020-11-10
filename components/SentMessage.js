import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../components/colors'

export default function SentMessage(props){
    return(
        <View style={{alignSelf: 'flex-end'}}>
            <View style={styles.sentMessage}>
                <View style={styles.sentMessageCorner}></View>
                <Text style={{color: 'white', fontSize: 14}}>{props.text}</Text>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    sentMessage: {
        height: 40,
        borderRadius: 40,
        backgroundColor: colors.lightblue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'baseline',
        paddingHorizontal: 15,
        margin: 10,
        zIndex: 1
    },
    sentMessageCorner: {
        width: 20,
        height: 20, 
        backgroundColor: colors.lightblue,
        position: 'absolute',
        bottom: 0,
        right: 0, 
        zIndex: -1
    },
})