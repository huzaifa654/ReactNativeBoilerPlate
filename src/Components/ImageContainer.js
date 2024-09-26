import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ImageContainer({ style, source }) {
    return (
        <View style={style}>
            <Image source={source} resizeMethod='contain' style={{ width: "100%", height: "100%" }} />
        </View>
    )
}

const styles = StyleSheet.create({})