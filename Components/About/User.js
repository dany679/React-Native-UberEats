import React from 'react'
import { View, Text ,SafeAreaView ,StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'

export default function User() {
    return (
        <SafeAreaView  style={{flex:1 , paddingHorizontal:8}}>
            <View style={styles.Wrapper }>
            <InputData/>
            <InputData/>
            <InputData/>
            <InputData/>
            <InputData/>
            <InputData/>
            </View>
        </SafeAreaView>
    )
}


const InputData =({label,value,name})=>(
<View style={{padding:8}}>
    <Text style={styles.Text}>{label?label:'No Data'}</Text>
    <TextInput style={styles.TextInput}/>
    <Divider width={1} color="white"  />
</View>
)
const styles= StyleSheet.create({
    Text:{
        color:'white',
        fontSize:15

    },
    TextInput:{
        color:'white',
        fontSize:15
    },
    Wrapper:{
    
        width: '100%',
    }
})