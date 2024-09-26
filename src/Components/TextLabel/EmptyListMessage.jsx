import React from 'react'
import TextLabel from './TextLabel'
import { ResponsiveFonts } from '../../contants/Fonts'
import { View } from 'react-native'
import { height, width } from '../../contants/Sizes'

const EmptyListMessage = ({ msg, marginTop, fav }) => {
    return (
        <View style={{ height: width * 1.3, justifyContent: 'center', alignItems: 'center', }}>
            <TextLabel text={msg} fontFamily={ResponsiveFonts.textualStyles.bold16} textAlign={'center'} marginTop={marginTop ? marginTop : 50} />
        </View>

    )
}

export default EmptyListMessage