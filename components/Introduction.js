import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../components/colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export default function InboxScreen({navigation}){
    return(
        <View style={styles.intro}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 40}}>
                <Text style={{color: 'white', fontSize: 14, paddingRight: 4, fontWeight: 'bold'}}>Someone</Text>
                <FontAwesome name={'check-circle'} color={'white'} size={20}/>
                <Text style={{color: colors.grey, fontSize: 14, paddingLeft: 4}}>@Someone</Text>
            </View>
            <Text style={{color: 'white', fontSize: 14}}>This piece of text gives the description of this paticular person.</Text>
            <View style={styles.row}>
                <Text style={{color: 'white', fontSize: 14, paddingRight: 4}}>200</Text>
                <Text style={{color: colors.grey, fontSize: 14, paddingRight: 16}}>Following</Text>
                <Text style={{color: 'white', fontSize: 14, paddingRight: 4}}>200</Text>
                <Text style={{color: colors.grey, fontSize: 14}}>Followers</Text>
            </View>
            <View style={[styles.row, {marginBottom: 20}]}>
                <AntDesign name={'calendar'} color={colors.grey} size={20}/>
                <Text style={{color: colors.grey, fontSize: 14}}>Joined June 2016</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})