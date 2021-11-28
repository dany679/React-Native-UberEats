import React from 'react'
import { View, Text } from 'react-native'

export default function ButtonCart({text , price, navigation}) {
    return (
        <View style={{ backgroundColor:'black' ,borderRadius:30,paddingVertical:6, position:'relative', bottom:20 , opacity:0.8, marginHorizontal:8}}>
            <Text style={{color:'white',fontSize:16, textAlign:'center'}}> Price : $ 30,20</Text>
        </View>
    )
}
