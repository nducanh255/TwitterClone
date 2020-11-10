import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import Avatar from '../components/Avatar'
import colors from '../components/colors'
import { AntDesign, Feather } from '@expo/vector-icons'

const Stack = createStackNavigator()

export default function SearchStack({navigation}){
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
                name='Search' 
                component={SearchScreen}
                options={{
                    title: '',
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