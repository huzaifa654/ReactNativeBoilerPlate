import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ImageContainer({ style, source, tintColor }) {
    return (
        <View style={style}>
            <Image tintColor={tintColor} source={source} resizeMode='contain' style={{ width: "100%", height: "100%" }} />
        </View>
    )
}

const styles = StyleSheet.create({})