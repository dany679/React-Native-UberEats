import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import GoBack from '../navigation/GoBack';

const localRestaurantsData = {
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874159.jpg&f=1&nofb=1',
  price: 40,
  name: 'Chicken and Fries la brasa',
  description:
    'The beast Hambúrguer and  artesanal beer 🍻🍔 🍻 from the city ',
  // Very good coffee ☕. In the beast place to you to go',
  stars: 4.0,
  clientsNumber: 700,
  safe: true,
  tags: ['comfort food', 'burger', 'beer', 'Coffee', 'massa'],
};
export default function About({navigation}) {
  return (
    <>
      <GoBack navigation={navigation}/>
      <RestaurantImage localRestaurantsData={localRestaurantsData} />
      <RestaurantSafe localRestaurantsData={localRestaurantsData} />
      <RestaurantData localRestaurantsData={localRestaurantsData} />
    </>
  );
}

const RestaurantImage = ({ localRestaurantsData }) => (
  <Image
    source={{
      uri: localRestaurantsData.imageUrl,
    }}
    style={{ width: '100%', height: 180 }}
  />
);

const RestaurantData = ({ localRestaurantsData }) => (
  <>
    <View style={{ padding: 8 }}>
      <Text style={{ fontSize: 26, fontWeight: '900' }}>
        {localRestaurantsData.name}
      </Text>
      <Text>{localRestaurantsData.description} </Text>
      <Text style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
        {localRestaurantsData.tags.map(
          (tag, idx) =>
            ` ${tag} ${
              localRestaurantsData.tags.length - 1 !== idx ? '·' : ''
            }`,
        )}
      </Text>
      <Text>({localRestaurantsData.clientsNumber}⭐)</Text>
    </View>
  </>
);

const RestaurantSafe = ({ localRestaurantsData }) =>
  localRestaurantsData.safe && (
    <View style={styles.safe}>
      <Text style={{ color: 'white' }}>Safe to go</Text>
    </View>
  );

const styles = StyleSheet.create({
  safe: {
    margin: 2,
    backgroundColor: 'green',
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 2,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 25,
    right: 10,
  },
});
