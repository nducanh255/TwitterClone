import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import Tweet from '../components/Tweet'
import colors from '../components/colors'
import PostButton from '../components/PostButton'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function HomeScreen({navigation}){
    const user = useSelector(state => state.user)

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/home/' + user.id).then(json => setTweets(json.data))
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Avatar navigation={navigation} openDrawer={true}/>,
            headerRight: () => (
                <TouchableOpacity>
                    <FontAwesome name={'magic'} size={24} color={colors.lightblue} style={{paddingHorizontal: 20}}/>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return(
        <View style={styles.container}>
            <PostButton navigation={navigation}/>
            {
                tweets === [] ? <Text style={{color: 'white'}}>Follow someone</Text> :
                <FlatList 
                    data={tweets}
                    renderItem={({item}) => <Tweet text={item.message} login={item.login} posted={item.posted}/>}
                    keyExtractor={(item) => item.id}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.darkblue
    }
})