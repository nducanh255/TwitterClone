import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import colors from '../components/colors'
import Notification from '../components/Notification'

export default function NotificationAllScreen(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.darkblue
    }
})