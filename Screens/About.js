import React from 'react'
import { SafeAreaView, Text ,View } from 'react-native'
import User from '../Components/About/User'
import ButtonCustom from '../Components/Button/ButtonCustom'
import GoBack from '../Components/navigation/GoBack'

export default function About({ navigation}) {
    return (
        <SafeAreaView style={{flex: 1, paddingTop:20, backgroundColor:'#c5c5c5'}} >
            <GoBack navigation={navigation}/>
            <View style={{flex: 1}}>
            <User/>
         <ButtonCustom text='Confirm'/>
            </View>
        </SafeAreaView>
    )
}
