import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Home from './Screens/Home';
import RestaurantDetail from './Screens/RestaurantDetail';

export default function RootNavigation() {
  const screenOptions = {
    headerShown: false,
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
