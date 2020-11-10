import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import colors from '../components/colors'
import Avatar  from '../components/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import PostScreen from '../screens/PostScreen'
import FollowingScreen from '../screens/FollowingScreen'

const Stack = createStackNavigator()

export default function HomeStack({navigation}){
    return(
        <Stack.Navigator  
            screenOptions={{
                headerStyle: {
                backgroundColor: colors.darkblue,
                },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    headerLeft: () => <Avatar navigation={navigation} openDrawer={true}/>,
                    headerRight: () => (
                        <TouchableOpacity>
                            <FontAwesome name={'magic'} size={24} color={colors.lightblue} style={{paddingHorizontal: 20}}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen name='Profile' component={ProfileScreen}/>
            <Stack.Screen 
                name='Post' 
                component={PostScreen} 
                options={{
                    title: ''
                }}
            />
            <Stack.Screen name='Following' component={FollowingScreen}/>
        </Stack.Navigator>
    )
}