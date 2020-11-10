import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from '../components/colors'
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const Tab = createMaterialTopTabNavigator()

export default function ProfileScreen(){
    const user = useSelector(state => state.user)

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{width: '100%', height: 150}}>
                <View style={{height: 100, width: '100%', backgroundColor: colors.grey, position: 'absolute'}}></View>
                <Image 
                    style={styles.profileAvatar}
                    source={require('../assets/twitter_avatar.png')}
                />
            </View>
            <View style={{width: '100%', marginTop: -50}}>
                <TouchableOpacity>
                    <View style={styles.setUpProfileButton}>
                        <Text style={styles.setUpButtonText}>Set up Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width: '100%', paddingLeft: 12}}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
    <Text style={{color: colors.grey, fontSize: 14}}>{user.login}</Text>
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name='calendar' color={colors.grey} size={14}/>
    <Text style={{color: colors.grey, fontSize: 14, paddingLeft: 8}}>Joined {(new Date(user.signup).getFullYear())}</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{color: 'white', fontSize: 14}}>{user.followings}</Text>
                    <Text style={{color: colors.grey, fontSize: 14, paddingLeft: 4}}>Following</Text>
    <Text style={{color: 'white', fontSize: 14, paddingLeft: 8}}>{user.followers}</Text>
                    <Text style={{color: colors.grey, fontSize: 14, paddingLeft: 4}}>Followers</Text>
                </View>
            </View>
            <View style={{width: '100%'}}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: colors.lightblue,
                        labelStyle: {fontSize: 12},
                        inactiveTintColor: colors.grey,
                        style: {backgroundColor: colors.darkblue, color: 'red'},
                        indicatorStyle : {color: 'red'},
                    }}
                >
                    <Tab.Screen name='Tweets' component={HomeScreen}/>
                    <Tab.Screen name='Replies' component={HomeScreen}/>
                    <Tab.Screen name='Media' component={HomeScreen}/>
                    <Tab.Screen name='Likes' component={HomeScreen}/>
                </Tab.Navigator>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.darkblue
    }, 
    profileAvatar: {
        width: 80, 
        height: 80, 
        borderRadius: 80, 
        borderWidth: 2, 
        borderColor: colors.darkblue, 
        position: 'absolute', 
        left: 20, 
        top: 60
    },
    setUpProfileButton: {
        width: 150, 
        height: 40, 
        alignSelf: 'flex-end', 
        marginRight: 20, 
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: colors.lightblue
    },
    setUpButtonText: {
        fontSize: 16,
        color: colors.lightblue,
        fontWeight: 'bold'
    }
})