import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from './HomeScreen'
import colors from '../components/colors'
import NotificationAllScreen from '../screens/NotificationAllScreen'

const Tab = createMaterialTopTabNavigator()

export default function NotificationScreen(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.lightblue,
                labelStyle: {fontSize: 12},
                inactiveTintColor: colors.grey,
                style: {backgroundColor: colors.darkblue, color: 'red'},
                indicatorStyle : {color: 'red'},
                allowFontScaling: false
            }}
        >
            <Tab.Screen name='All' component={NotificationAllScreen}/>
            <Tab.Screen name='Mention' component={HomeScreen}/>
        </Tab.Navigator>
    )
}