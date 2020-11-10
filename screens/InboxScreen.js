import React, { useState, useLayoutEffect } from 'react'
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../components/colors'
import { AntDesign, Ionicons, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import SentMessage from '../components/SentMessage'
import ReceivedMessage from '../components/ReceivedMessage'
import Introduction from '../components/Introduction'

export default function InboxScreen({navigation}){
    const [messageHeight, setMessageHeight] = useState(30)
    const [messages, setMessages] = useState(['This message is at the bottom','Remmeber to reverse this chat array','I', 'I','I', 'I', 'I','I', 'I', 'I','I', 'I', 'I'])
    const [newMessage, setNewMessage] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image 
                        style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}}
                        source={require('../assets/twitter_avatar.png')}
                    />
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 4}}>Someone</Text>
                            <FontAwesome name={'check-circle'} color={'white'} size={20}/>
                        </View>
                        <Text style={{color: colors.grey, fontSize: 14}}>@Someone</Text>    
                    </View>
                </View>
            ),
            headerRight: () => (
                <Ionicons 
                    name='md-information-circle-outline' color={colors.lightblue} size={30}
                    style={{paddingRight: 10}}
                />
            )
        })
    }, [navigation])

    return(
        <View style={styles.container}>
            <FlatList 
                ListFooterComponent={<Introduction />}
                style={styles.inbox}
                data={messages}
                renderItem={({item}) => <SentMessage text={item}/>}
                inverted={true}
            />
            <View style={styles.messageController}>
                <AntDesign 
                    name={'picture'} color={colors.lightblue} size={24}
                    style={{marginHorizontal: 10}}
                />
                <MaterialCommunityIcons 
                    name={'gif'} color={colors.lightblue} size={28}
                    style={{marginHorizontal: 10}}
                />
                <TextInput 
                    style={[styles.input, {height: Math.max(messageHeight, 30)}]}
                    placeholder='Start a new message'
                    placeholderTextColor={colors.grey}
                    onContentSizeChange={(event) => {
                        setMessageHeight(event.nativeEvent.contentSize.height)
                    }}
                    multiline={true}
                    onChangeText={(text) => {
                        setNewMessage(text)
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        setMessages([newMessage, ...messages])
                        setMessageHeight(40)
                    }}
                >
                    <SimpleLineIcons 
                        name={'paper-plane'} color={colors.lightblue} size={24}
                        style={{marginHorizontal: 10}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.darkblue,
        flexDirection: 'column',
        alignItems: 'center',
    },
    intro: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: colors.grey,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inbox: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    recievedMessage: {
        width: 80, 
        height: 40,
        borderRadius: 40,
        backgroundColor: colors.lightgrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recievedMessageCorner: {
        width: 40,
        height: 20, 
        backgroundColor: colors.lightgrey,
        position: 'absolute',
        bottom: 0,
        left: 0, 
        zIndex: -1
    },
    messageController:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: colors.darkblue,
        borderTopWidth: 0.5,
        borderColor: colors.grey
    },
    input: {
        width: 280, 
        backgroundColor: colors.darkgrey, 
        borderRadius: 30,
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,        
    }
})