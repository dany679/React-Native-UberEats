import React from 'react'
import { View, Text } from 'react-native'
import About from '../Components/RestarantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import RestaurantMenu from '../Components/RestarantDetail/RestaurantMenu';

export default function RestaurantDetail() {
  return (
    <View>
      <About/>
      <Divider width={1}  />
      <RestaurantMenu/>

    </View>
  )
}
