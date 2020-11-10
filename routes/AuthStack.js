import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../components/colors'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeTab from './HomeTab'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'
import Avatar from '../components/Avatar'
import { TouchableOpacity } from 'react-native'

const Stack = createStackNavigator()

export default function AuthStack({navigation}){
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
                name='SignIn' 
                component={SignInScreen}
            />
            <Stack.Screen 
                name='SignUp' 
                component={SignUpScreen}
            />
            <Stack.Screen 
                name='HomeTab' 
                component={HomeTab} 
                options={{
                    headerLeft: () => 
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            <Feather name={'menu'} size={24} color={colors.lightblue} style={{paddingHorizontal: 20}}/>
                        </TouchableOpacity>,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Following')}
                        >
                            <Feather name={'users'} size={24} color={colors.lightblue} style={{paddingHorizontal: 20}}/>
                        </TouchableOpacity>
                    ),
                    headerTitle: () =>     
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <AntDesign name={'twitter'} size={28} color={colors.lightblue} style={{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                }}
            />
        </Stack.Navigator>
    )
}