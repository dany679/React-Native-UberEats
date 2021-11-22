import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
const itens = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pickups',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Itens',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View style={{ paddingVertical: 6 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {itens.map((item, index) => (
          <View
            key={index}
            style={{
              marginHorizontal: 6,
              alignItems: 'center',
            }}
          >
            <Image
              source={item.image}
              style={{ width: 40, height: 30, resizeMode: 'contain' }}
            />
            <Text style={{ fontWeight: '700' }}> {item.text} </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
