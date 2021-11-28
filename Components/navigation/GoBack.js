import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function GoBack({navigation , textBack , description}) {
    return (
        <TouchableOpacity
        style={description? styles.top : styles.inside }
        onPress={() =>navigation.goBack()}
        >
        <Text style={{fontSize:20}}>{textBack? textBack: 'X'} {description && description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inside:{padding:20,position:'relative',top:0,zIndex:10, width: 80, backgroundColor:'transparent',left:0},
    top:{padding:20,position:'absolute',top:0,zIndex:10, flex:1, backgroundColor:'transparent',left:0}
})