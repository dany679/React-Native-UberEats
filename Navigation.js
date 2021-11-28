import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './Screens/Home';
import RestaurantDetail from './Screens/RestaurantDetail';
import About from './Screens/About';

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
        <Stack.Screen name='About' component={About} />
        {/* <Stack.Screen name='Save' component={Save} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
