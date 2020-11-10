import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../screens/NotificationScreen'
import Avatar from '../components/Avatar'
import colors from '../components/colors'
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator()

export default function NotificationStack({navigation}){
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
                name='Notification' 
                component={NotificationScreen}
                options={{
                    headerLeft: () => <Avatar navigation={navigation}/>,
                    headerRight: () => (
                        <TouchableOpacity>
                            <Feather name={'settings'} size={24} color={colors.lightblue} style={{paddingHorizontal: 20}}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}