import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import SearchStack from './SearchStack'
import NotificationStack from './NotificationStack'
import MessageStack from './MessageStack'
import colors from '../components/colors'
import { Feather } from '@expo/vector-icons'
import AuthStack from './AuthStack'

const Tab = createBottomTabNavigator()

export default function HomeTab(){
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.darkblue,
        inactiveBackgroundColor: colors.darkblue
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'home'}
              style={styles.icon}
              color={focused ? colors.lightblue: colors.grey} 
              size={24}
            />
          )
        }} 
      />
      <Tab.Screen 
        name="SearchStack" 
        component={SearchStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'search'}
              style={styles.icon}
              color={focused ? colors.lightblue: colors.grey} 
              size={24}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="NotificationStack" 
        component={NotificationStack} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'bell'}
              style={styles.icon}
              color={focused ? colors.lightblue: colors.grey} 
              size={24}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="MessageStack" 
        component={MessageStack} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'mail'}
              style={styles.icon}
              color={focused ? colors.lightblue: colors.grey} 
              size={24}
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingTop: 10
  }
})