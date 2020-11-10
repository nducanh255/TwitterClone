import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../components/colors'
import PageAvatar from '../components/PageAvatar'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export default function Message(){
    return(
        <View style={styles.message}>
            <PageAvatar />
            <View style={{paddingLeft: 10, alignSelf: 'flex-start'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Tweet's Author</Text>
                    <FontAwesome name={'check-circle'} color={'white'} size={16} style={{marginHorizontal: 4}}/>
                    <Text style={{color: colors.grey, fontSize: 16}}>@...</Text>
                    <Text style={{color: colors.grey, textAlign:'right', fontSize: 16}}>2 minutes</Text>
                    <TouchableOpacity>
                        <AntDesign name={'down'} color={colors.grey} size={12} style={{marginLeft: 5}}/>
                    </TouchableOpacity>
                </View>
                <Text style={{color: colors.grey, fontSize: 14, paddingTop: 2}}>Message...</Text>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    message: {
        width: '100%', 
        paddingVertical: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomColor: colors.grey, 
        borderBottomWidth: 1
    }
})