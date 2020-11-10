import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from '../components/colors'
import Message from '../components/InboxMessage'

export default function MessageScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Search for people and groups'
                    placeholderTextColor={colors.grey}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Inbox')}
                style={{width: '100%'}}
            >
                <Message />
            </TouchableOpacity>
            <Message />
            <Message />
            <Message />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.darkblue
    },
    input: {
        width: '95%', 
        height: 40, 
        backgroundColor: colors.darkgrey, 
        borderRadius: 30,
        color: 'white',
        paddingLeft: 20,
        marginVertical: 10
    },
    searchBar: {
        width: '100%', 
        borderColor: colors.grey, 
        borderBottomWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    message: {
        width: '100%', 
        paddingVertical: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomColor: colors.grey, 
        borderBottomWidth: 1
    }
})