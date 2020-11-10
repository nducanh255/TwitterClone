import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import colors from '../components/colors'
import { Fontisto, AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import CircularProcess from '../components/CircularProcess'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default function PostScreen({navigation}){
    const [height, setHeight] = useState(100)
    const [text, setText] = useState('')
    const user = useSelector(state => state.user)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => {}} 
                    style={{width: 80, height: 36, borderRadius: 36, backgroundColor: colors.lightblue, justifyContent: 'center', alignItems: 'center', marginRight: 15}}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Tweet</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    // Max length of the text input is 280 characters
    const handleComposeTweet = (text) => {
        axios.post('http://localhost:3000/compose/tweet', {
            //message: text,
            message: text,
            posted: +new Date(),
            id: uuidv4(),
            uid: user.id,
            login: user.login
        }).then((response) => {
            console.log(response);
        })
    }

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/twitter_avatar.png')}
                style={{width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, marginTop: 10}} 
            />
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', marginRight: 15}}>
                <TextInput 
                    style={[styles.input, {height: Math.max(height, 100)}]}
                    placeholder={'What\'s happening?'}
                    placeholderTextColor={colors.grey}
                    multiline={true}
                    onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
                    onChangeText={(text) => setText(text)}
                />
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', borderColor: colors.grey, borderBottomWidth: 1, paddingVertical: 10}}>
                    <Fontisto name={'earth'} color={colors.lightblue} size={20}/>  
                    <Text style={{fontSize: 16, color: colors.lightblue, paddingLeft: 8}}>Everyone can reply</Text>  
                </View>
                <View style={styles.postController}>
                    <AntDesign name={'picture'} color={colors.lightblue} size={24}/>
                    <MaterialCommunityIcons name={'gif'} color={colors.lightblue} size={28}/>
                    <SimpleLineIcons name={'chart'} color={colors.lightblue} size={20}/>
                    <AntDesign name={'smileo'} color={colors.lightblue} size={20}/>
                    <AntDesign name={'calendar'} color={colors.lightblue} size={20}/>
                    <CircularProcess 
                        percent={text.length * 100 / 280}
                        radius={10}
                        bgRingWidth={2}
                        progressRingWidth={2}
                        ringColor={colors.lightblue}
                        ringBgColor={colors.darkgrey}
                        textFontSize={20}
                        textFontColor={'transparent'}
                    />
                    <AntDesign name={'pluscircleo'} color={colors.lightblue} size={24}/>
                </View>
                <TouchableOpacity 
                    style={{height: 36, width: '100%', backgroundColor: colors.lightblue, borderRadius: 36, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => handleComposeTweet(text)}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Tweet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkblue,
        flexDirection: 'row',
    },
    input: {
        width: '100%', 
        height: 100,
        color: 'white',
        fontSize: 20,
        flexDirection: 'column',
        marginTop: 10
    },
    postController: {
        width: '100%', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    }
})