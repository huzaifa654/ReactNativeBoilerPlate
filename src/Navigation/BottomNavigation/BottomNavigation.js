import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Userscreens/Home';
import Login from '../../Screens/AuthScreens/Login';

export default function BottomNavigation() {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    const TabView = ({ icon, focused, home }) => {
        return (
            <View>
                <Image source={icon} resizeMode='contain' style={(home && focused) ? styles.iconActive1 : focused ? styles.iconActive : styles.iconNonActive} />
                {<View style={focused ? [styles.fixedLines] : [styles.fixedLinesNo]} />}
            </View>
        );
    };
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={() => ({ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true })}>
            <Tab.Screen name={'Home'} component={Home} options={{ tabBarIcon: ({ focused }) => <TabView icon={MenuIcon} focused={focused} /> }} />
            <Tab.Screen name={'Login'} component={Login} options={{ tabBarIcon: ({ focused }) => <TabView icon={HeartIcon} focused={focused} /> }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})