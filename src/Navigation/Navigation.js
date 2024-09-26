import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/AuthScreens/Login';
import Home from '../Screens/Userscreens/Home';
import BottomNavigation from './BottomNavigation/BottomNavigation';

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='BottomNavigation' screenOptions={{ headerShown: false, animation: 'slide_from_bottom', animationDuration: 500, }}>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})