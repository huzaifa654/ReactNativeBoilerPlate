import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from './TextLabel/TextLabel'
import COLORS from '../Constants/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import * as Progress from 'react-native-progress';
import Expanses from './Expanses'

export default function TotalBalance() {
    return (
        <View style={styles?.totalBalance}>
            <TextLabel text={"Total Balance"} color={COLORS?.grey} fontSize={14} marginLeft={scale(25)} />
            <TextLabel text={"$13,370.96"} color={COLORS?.white} fontSize={25} fontWeight={"bold"} marginTop={verticalScale(5)} marginLeft={scale(25)} />
            <View style={styles?.row}>
                <Expanses color={COLORS?.red} progress={0.5} expanses={"Expanses"} amount={"$2,186.53"} />
                <Expanses color={"#008000"} progress={0.8} expanses={"Investment"} amount={"$5,376.80"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    totalBalance: {
        // marginLeft: scale(25),
        marginTop: verticalScale(20)
    },
    Expanses: {
        backgroundColor: "#2e3d41",
        width: "50%",
        padding: 15,
        marginTop: verticalScale(40),
        borderRadius: 12
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: scale(15)

    }
})