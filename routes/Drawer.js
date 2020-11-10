import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from './DrawerContent'
import AuthStack from './AuthStack'

const Drawer = createDrawerNavigator()

export default function Navigator(){

    return(
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={props => <DrawerContent {...props}/>}
                //drawerType={Dimensions.get('window').width >= 480 && 'permanent'}
            >
                <Drawer.Screen name='AuthStack' component={AuthStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}