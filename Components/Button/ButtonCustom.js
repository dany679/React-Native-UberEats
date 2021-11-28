import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

export default function ButtonCustom({text , price, navigation}) {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");
    
    
      const [dimensions, setDimensions] = useState({ window, screen });
    
      useEffect(() => {
        const subscription = Dimensions.addEventListener(
          "change",
          ({ window, screen }) => {
            setDimensions({ window, screen });
          }
        );
        return () => subscription?.remove();
      });
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        style={{ backgroundColor:'black' ,borderRadius:30,paddingVertical:6, position:'relative', bottom:20 , opacity:0.8, marginHorizontal:8}}>
            <Text style={{color:'white',fontSize:16, textAlign:'center'}}> {text}</Text>
        </TouchableOpacity>
    )
}
