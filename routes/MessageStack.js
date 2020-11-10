import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageScreen from '../screens/MessageScreen'
import Avatar from '../components/Avatar'
import colors from '../components/colors'
import InboxScreen from '../screens/InboxScreen'

const Stack = createStackNavigator()

export default function MessageStack({navigation}){
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
                name='Message' 
                component={MessageScreen}
                options={{
                    headerLeft: () => <Avatar navigation={navigation}/>
                }}
            />
            <Stack.Screen name='Inbox' component={InboxScreen}/>
        </Stack.Navigator>
    )
}