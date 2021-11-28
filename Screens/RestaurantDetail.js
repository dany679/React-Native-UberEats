import React from 'react';
import { SafeAreaView,View ,ScrollView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import ButtonCart from '../Components/Button/ButtonCart';
import About from '../Components/RestarantDetail/About';
import RestaurantMenu from '../Components/RestarantDetail/RestaurantMenu';

export default function RestaurantDetail({ navigation}) {
  return (
    <View style={{flex:1 }}> 
      <About navigation={navigation}/>
      <Divider width={1}  />
      <ScrollView showsHorizontalScrollIndicator={false}>
      <RestaurantMenu />
      </ScrollView>
      <ButtonCart/>
    </View>
  )
}
