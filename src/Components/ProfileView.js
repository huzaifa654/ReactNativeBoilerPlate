import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageContainer from './ImageContainer'
import { UserIcon } from '../Constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import COLORS from '../Constants/Colors'
import TextLabel from './TextLabel/TextLabel'

export default function ProfileView() {
    return (
        <View>
            <View style={styles?.profileContainer}>
                <ImageContainer source={UserIcon} style={styles?.userImage} />
                <TextLabel text={"User"} />
            </View>
        </View>
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
    }
})