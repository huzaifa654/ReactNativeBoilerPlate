import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/AuthScreens/Login';
import Home from '../Screens/Userscreens/Home';

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, animation: 'slide_from_bottom', animationDuration: 500, }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})