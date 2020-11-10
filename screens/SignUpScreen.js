import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import colors from '../components/colors'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default function SignInScreen({navigation}){
    const [username, setUsername] = useState('')
    const [logInName, setLogInName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')

    useEffect(() => {
        console.log(username, password)
    }, [])


    useLayoutEffect(() => {
        navigation.setOptions({
        //     headerRight: () =>
        //         <AntDesign name={'twitter'} size={32} color={'white'} style={{paddingRight: 20}}/>,
            headerTitle: () => {}
        })
    }, [navigation])

    const handleSignUp = () => {
    // login, id, name, followers, following, posts, signup
        axios.post('http://localhost:3000/signup', {
            login: logInName,
            id: uuidv4(),
            name: username,
            password: password,
            followers: 0,
            followings: 0,
            posts: 0,
            signup: +new Date()
        }).then((response) => {
            console.log(response);
        })
        
        // console.log(username, logInName, password)
        // console.log(+ new Date())
    }

    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginVertical: 12}}>Đăng ký tài khoản Twitter</Text>
            <TextInput 
                style={[styles.input]}
                placeholder='Tên người dùng'
                placeholderTextColor={colors.grey}
                onChangeText={(text) => {
                    setUsername(text)
                }}
            />
            <TextInput 
                style={[styles.input]}
                placeholder='Tên đăng nhập'
                placeholderTextColor={colors.grey}
                onChangeText={(text) => {
                    setLogInName(text)
                }}
            />
            <TextInput 
                style={[styles.input]}
                placeholder='Mật khẩu'
                placeholderTextColor={colors.grey}
                onChangeText={(text) => {
                    setPassword(text)
                }}
                secureTextEntry={true}
            />
            <TextInput 
                style={[styles.input]}
                placeholder='Nhập lại Mật khẩu'
                placeholderTextColor={colors.grey}
                onChangeText={(text) => {
                    setConfirmedPass(text)
                }}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => handleSignUp()}
                style={styles.signInButton}
            >
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Đăng ký</Text>
            </TouchableOpacity>
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
        width: '85%', 
        height: 40, 
        backgroundColor: colors.darkgrey, 
        color: 'white',
        paddingLeft: 20,
        marginVertical: 12,
        borderBottomColor: colors.grey,
        borderBottomWidth: 2
    },
    signInButton: {
        width: '85%', 
        height: 40, 
        backgroundColor: colors.lightblue, 
        borderRadius: 100,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12
    }
})