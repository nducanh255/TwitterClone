import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../components/colors'
import Avatar from '../components/Avatar'

export default function Notification(){
    return(
        <View style={styles.container}>
            <View style={{marginLeft: -12}}>
                <Avatar />
            </View>
            <Text style={{color: 'white'}}>In case you missed <Text style={{fontWeight: 'bold'}}>This person's </Text>tweets</Text>
            <Text style={{color: colors.grey, fontSize: 14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci ex, fringilla quis libero eget, posuere pretium erat. Etiam ullamcorper nulla non turpis mollis venenatis. Phasellus tincidunt posuere lobortis. In quis vestibulum justo. Sed fringilla facilisis felis, in ullamcorper nulla posuere ut.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.darkblue,
        width: '100%',
        paddingLeft: 75,
        paddingVertical: 10,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    }
})