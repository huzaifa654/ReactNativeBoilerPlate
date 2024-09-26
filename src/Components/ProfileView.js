import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from './ImageContainer'
import { NextIcon, UserIcon } from '../Constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import COLORS from '../Constants/Colors'
import TextLabel from './TextLabel/TextLabel'

export default function ProfileView() {
    return (
        <TouchableOpacity>
            <View style={styles?.profileContainer}>
                <ImageContainer source={UserIcon} style={styles?.userImage} />
                <TextLabel text={"Michel"} color={COLORS?.white} alignSelf={"center"} marginLeft={scale(12)} fontSize={16} fontWeight={"400"} />
                <ImageContainer source={NextIcon} style={styles?.nextimg} tintColor={COLORS?.white} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: scale(45),
        height: verticalScale(45),

    },
    profileContainer: {
        flexDirection: "row",
        backgroundColor: COLORS?.lightBlack,
        width: "45%",
        margin: moderateScale(20),
        borderRadius: 25
    },
    nextimg: {
        width: scale(15),
        height: verticalScale(15),
        tintColor: "white",
        alignSelf: "center",
        marginLeft: scale(12)
    }
})