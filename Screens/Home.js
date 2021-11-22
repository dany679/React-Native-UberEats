import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../Components/home/HeaderTabs';
import SearchBar from '../Components/home/SearchBar';
import Categories from '../Components/home/Categories';
import RestaurantsItens from '../Components/home/RestaurantsItens';
import BottomBar from '../Components/home/BottomBar';
import { Divider } from 'react-native-elements/dist/divider/Divider';

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
