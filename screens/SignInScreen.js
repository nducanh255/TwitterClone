import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import colors from '../components/colors'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

export default function SignInScreen({navigation}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    //const [queryName, setQueryName] = useState('')

    useEffect(() => {
        console.log(username, password)
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () =>
                <AntDesign name={'twitter'} size={32} color={'white'} style={{alignSelf: 'center'}}/>
        })
    }, [navigation])

    async function handleSignIn(){
        let queryName = ''
        await axios.get('http://localhost:3000/login/' + username).then(val => queryName = (val.data))
        if (queryName.password === password){
            dispatch({type: 'LOG_IN', payload: queryName})
            navigation.navigate('HomeTab')
        } else {
            console.log('Wrong password')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginVertical: 12}}>Đăng nhập vào Twitter</Text>
            <TextInput 
                style={[styles.input]}
                placeholder='Tên đăng nhập'
                placeholderTextColor={colors.grey}
                onChangeText={(text) => {
                    setUsername(text)
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
            <TouchableOpacity
                onPress={() =>
                    handleSignIn()
                }
                style={styles.signInButton}
            >
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{color: colors.lightblue, fontSize: 16}}>Đăng ký Twitter</Text>
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