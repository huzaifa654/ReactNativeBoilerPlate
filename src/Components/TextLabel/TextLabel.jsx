import { Text } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import COLORS from '../../Constants/Colors'


const TextLabel = ({ text, color, marginTop, fontFamily, marginBottom, textAlign, fontSize, paddingTop, marginLeft, textDecorationLine, width, onPress, alignSelf, numberOfLines, marginRight, adjustsFontSizeToFit = false, textTransform }) => {

    return (
        <Text
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            style={[{
                color: color ? color : COLORS.black,
                marginTop: marginTop ? verticalScale(marginTop) : 0,
                marginBottom: marginBottom ? verticalScale(marginBottom) : 0,
                paddingTop: paddingTop ? verticalScale(paddingTop) : 0,
                textAlign: textAlign ? textAlign : 'left',
                marginLeft: marginLeft ? moderateScale(marginLeft) : 0,
                marginRight: marginRight ? moderateScale(marginRight) : 0,
                textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
                textTransform: textTransform ? "uppercase" : 'capitalize',
            }, fontFamily ? fontFamily : {}, fontSize && { fontSize: moderateScale(fontSize) }, width && { width }, alignSelf && { alignSelf: alignSelf }]}
            onPress={onPress}
            numberOfLines={numberOfLines}

        >{text}</Text>
    )
}

export default TextLabel