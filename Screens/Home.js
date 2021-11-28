import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomBar from '../Components/home/BottomBar';
import Categories from '../Components/home/Categories';
import HeaderTabs from '../Components/home/HeaderTabs';
import RestaurantsItens from '../Components/home/RestaurantsItens';
import SearchBar from '../Components/home/SearchBar';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: '#F5F5F5', padding: 16 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantsItens navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomBar navigation={navigation} />
    </SafeAreaView>
  );
}
