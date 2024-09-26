import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from './TextLabel/TextLabel'
import COLORS from '../Constants/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import * as Progress from 'react-native-progress';
export default function Expanses({ progress, color, expanses, amount }) {
    return (
        <View style={styles?.Expanses}>
            <TextLabel text={expanses} color={COLORS?.white} fontSize={18} width={"100%"} marginBottom={5} />
            <TextLabel text={`${expanses} In Dec,2023`} color={COLORS?.grey} fontSize={11} width={"100%"} />
            <TextLabel text={amount} color={COLORS?.white} fontSize={18} width={"100%"} fontWeight={"bold"} marginTop={verticalScale(5)} />
            <Progress.Bar progress={progress} width={200} color={color} style={{ width: "100%", marginTop: verticalScale(15) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    Expanses: {
        backgroundColor: "#2e3d41",
        width: "45%",
        padding: 15,
        marginTop: verticalScale(40),
        borderRadius: 12
    }
})