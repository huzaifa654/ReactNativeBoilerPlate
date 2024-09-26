import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import COLORS from '../../Constants/Colors'
import ProfileView from '../../Components/ProfileView'

export default function Home() {
    return (
        <View style={styles?.container}>
            <ProfileView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS?.black
    }
})