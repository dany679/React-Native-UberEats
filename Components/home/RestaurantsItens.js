import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Yelp_Api_Key =
  'I7EhyDHXjCTZTBmf9ZSeasXuPya-B8Ta8LKXbQVjc_lZkihRYDptIEuHym4sEv6WzP7KU86w35ojXmqfblOQPolXwNzZJwLTfSjsIv78fQDZ_FRpweSUSfM9TrOJYXYx';
const localRestaurantsData = [
  {
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874159.jpg&f=1&nofb=1',
    price: 40,
    categories: ['Pickups', 'Deals'],
    estimateTime: '30 · 45 min ',
    name: 'Chicken and Fries la brasa',
    stars: 4.0,
  },
  {
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874159.jpg&f=1&nofb=1',
    price: 40,
    categories: ['Bear', 'Coffee'],
    estimateTime: '30 · 45 min ',
    name: 'Coffee to go',
    stars: 4.7,
  },
];
export default function RestaurantsItens({ navigation }) {
  console.log(navigation);
  const [restauranteData, setRestauranteData] = useState(localRestaurantsData);
  const GetLocalRestaurantFromYelp = async () => {
    //https://api.yelp.com/v3/businesses/search?term=rstaurants&latitude=37.786882&longitude=-122.399972
    const getUrl =
      ' https://api.yelp.com/v3/businesses/search?term=rstaurants&location=SaoPaulo ';

    const options = {
      headers: {
        authorization: `Bearer ${Yelp_Api_Key}`,
      },
    };
    return await fetch(getUrl, options)
      .then((response) => response.json())
      .then((json) => setRestauranteData(json.businesses));
  };
  return (
    <View
      style={{
        padding: 16,
      }}
    >
      {restauranteData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('RestaurantDetail')}
        >
          <View style={{ paddingVertical: 4 }}>
            <RestaurantImage imageUrl={restaurant.imageUrl} />
            <RestaurantInfo
              name={restaurant.name}
              estimateTime={restaurant.estimateTime}
              stars={restaurant.stars}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const RestaurantImage = ({ imageUrl }) => (
  <>
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 0,
        top: 4,
        padding: 30,
        // backgroundColor: 'red',
      }}
    >
      <MaterialCommunityIcons name='heart-outline' size={24} color='white' />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = ({ name, estimateTime, stars }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    }}
  >
    <View>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>{name}</Text>
      <Text style={{ color: '#50514F' }}>{estimateTime}</Text>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 100,
      }}
    >
      {/* <Text style={{ textAlign: 'center' }}>{stars} </Text> */}
      <Text>{stars === Math.floor(stars) ? stars + '.0' : stars}</Text>
    </View>
  </View>
);
