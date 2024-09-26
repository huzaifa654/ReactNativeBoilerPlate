import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Userscreens/Home';
import Login from '../../Screens/AuthScreens/Login';
import { HomeIcon, InvestmentIcon, ProfileIcon, StatsIcon } from '../../Constants/Images';
import Investment from '../../Screens/Userscreens/Investment';
import Stats from '../../Screens/Userscreens/Stats';
import Profile from '../../Screens/Userscreens/Profile';
import { verticalScale } from 'react-native-size-matters';
import { moderateScale } from 'react-native-size-matters';
import COLORS from '../../Constants/Colors';

export default function BottomNavigation() {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    const TabView = ({ icon, focused, home }) => {
        return (
            <View >
                <Image source={icon} resizeMode='contain' style={(home && focused) ? styles.iconActive1 : focused ? styles.iconActive : styles.iconNonActive} />
                {<View style={focused ? [styles.fixedLines] : [styles.fixedLinesNo]} />}
            </View>
        );
    };
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: verticalScale(50), // Increase the height here
                    paddingBottom: verticalScale(10), // Adjust padding if needed
                    paddingTop: verticalScale(10), // Adjust padding if needed
                    backgroundColor: COLORS.white, // Optional, change background color if needed
                },
            })}
        >
            <Tab.Screen name={'Home'} component={Home} options={{ tabBarIcon: ({ focused }) => <TabView icon={HomeIcon} focused={focused} /> }} />
            <Tab.Screen name={'Investment'} component={Investment} options={{ tabBarIcon: ({ focused }) => <TabView icon={InvestmentIcon} focused={focused} /> }} />
            <Tab.Screen name={'Stats'} component={Stats} options={{ tabBarIcon: ({ focused }) => <TabView icon={StatsIcon} focused={focused} /> }} />
            <Tab.Screen name={'Profile'} component={Profile} options={{ tabBarIcon: ({ focused }) => <TabView icon={ProfileIcon} focused={focused} /> }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconNonActive: {
        tintColor: COLORS.grey,
        height: verticalScale(25),
        width: verticalScale(25),
    },
    iconActive: {
        tintColor: COLORS.black,
        height: verticalScale(25),
        width: verticalScale(25),
    },
    iconActive1: {
        tintColor: COLORS.black,
        height: verticalScale(32),
        width: verticalScale(32),
    },
    fixedLines: {
        width: moderateScale(8),
        height: 1,
        backgroundColor: COLORS.black,
        alignSelf: 'center',
        marginTop: verticalScale(5),
    },
    fixedLinesNo: {
        width: moderateScale(8),
        height: 1,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        marginTop: verticalScale(5),
    },
});