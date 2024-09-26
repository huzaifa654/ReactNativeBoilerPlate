import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from './TextLabel/TextLabel'
import COLORS from '../Constants/Colors'
import ImageContainer from './ImageContainer'
import { Arrow, BitCoin, cardano, Forex, Stcok } from '../Constants/Images'

export default function InvestmentRate() {
    return (
        <View style={styles?.investmentRate}>
            <TextLabel text={"Investment Rate"} color={COLORS?.white} fontSize={15} />
            <View style={styles?.row}>
                <ImageContainer source={BitCoin} style={styles?.coin} />
                <TextLabel text={"Bitcoin"} color={COLORS?.white} fontSize={16} fontWeight={"600"} alignSelf={"center"} marginLeft={scale(10)} />
                <TextLabel text={"$1.3650"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.arrow} tintColor={"#90EE90"} />
                <TextLabel text={"$0.7352"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.redarrow} tintColor={COLORS?.red} />
            </View>

            <View style={styles?.row}>
                <ImageContainer source={Stcok} style={styles?.coin} />
                <TextLabel text={"Stcok"} color={COLORS?.white} fontSize={16} fontWeight={"600"} alignSelf={"center"} marginLeft={scale(10)} />
                <TextLabel text={"$1.3650"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.arrow} tintColor={"#90EE90"} />
                <TextLabel text={"$0.7352"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.redarrow} tintColor={COLORS?.red} />
            </View>


            <View style={styles?.row}>
                <ImageContainer source={cardano} style={styles?.coin} />
                <TextLabel text={"Cardano"} color={COLORS?.white} fontSize={16} fontWeight={"600"} alignSelf={"center"} marginLeft={scale(10)} />
                <TextLabel text={"$1.3650"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.arrow} tintColor={"#90EE90"} />
                <TextLabel text={"$0.7352"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.redarrow} tintColor={COLORS?.red} />
            </View>


            <View style={styles?.row}>
                <ImageContainer source={Forex} style={styles?.coin} />
                <TextLabel text={"Forex"} color={COLORS?.white} fontSize={16} fontWeight={"600"} alignSelf={"center"} marginLeft={scale(10)} />
                <TextLabel text={"$1.3650"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.arrow} tintColor={"#90EE90"} />
                <TextLabel text={"$0.7352"} color={COLORS?.white} fontSize={15} alignSelf={"center"} marginLeft={scale(25)} />
                <ImageContainer source={Arrow} style={styles?.redarrow} tintColor={COLORS?.red} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    investmentRate: {
        backgroundColor: "#2e3d41",
        width: "90%",
        alignSelf: "center",
        marginTop: verticalScale(20),
        borderRadius: 12,
        padding: 12
    },
    row: {
        flexDirection: "row",
        marginTop: verticalScale(15),
        marginBottom: verticalScale(10),

    },
    coin: {
        width: scale(25),
        height: verticalScale(25),

    },
    arrow: {
        width: scale(15),
        height: verticalScale(15),
        alignSelf: "center",
        marginLeft: scale(5),
        transform: [{ rotate: '120deg' }]
    },
    redarrow: {
        width: scale(15),
        height: verticalScale(15),
        alignSelf: "center",
        marginLeft: scale(5),
        transform: [{ rotate: '300deg' }]
    }
})