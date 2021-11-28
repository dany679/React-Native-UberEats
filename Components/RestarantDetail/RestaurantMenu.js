import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RestaurantMenu() {
  const menuLocal = [
    {
      prate: 'Frango a la turma ',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nzpxZ3z0THxWAbaIFVy5DQHaEo%26pid%3DApi&f=1',
      price: 22.4,
      description:
        'Peito de frango com bolinhas de mandioca e tempero baiano. ',
    },
    {
      prate: 'Frango a la turma ',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nzpxZ3z0THxWAbaIFVy5DQHaEo%26pid%3DApi&f=1',
      price: 22.4,
      description:
        'Peito de frango com bolinhas de mandioca e tempero baiano. ',
    },
    {
      prate: 'Frango a la turma ',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nzpxZ3z0THxWAbaIFVy5DQHaEo%26pid%3DApi&f=1',
      price: 22.4,
      description:
        'Peito de frango com bolinhas de mandioca e tempero baiano. ',
    },
    {
      prate: 'Frango a la turma ',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nzpxZ3z0THxWAbaIFVy5DQHaEo%26pid%3DApi&f=1',
      price: 22.4,
      description:
        'Peito de frango com bolinhas de mandioca e tempero baiano. ',
    },
    {
      prate: 'Frango a la turma ',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nzpxZ3z0THxWAbaIFVy5DQHaEo%26pid%3DApi&f=1',
      price: 22.4,
      description:
        'Peito de frango com bolinhas de mandioca e tempero baiano. ',
    },
  ];

  return (
    <View
    style={{ paddingBottom:30 , paddingHorizontal:4 }}
    >
      {menuLocal.map((menu, idx) => (
        <View style={styles.wrapperView} key={idx}>
          <MenuInfo
            title={menu.prate}
            description={menu.description}
             price={menu.price}
          />
          <MenuImage imageUrl={menu.imageUrl} />
        </View>
      ))}
    </View>
  );
}

const MenuInfo = ({ title, description, price }) => (
  <View style={{ flex: 1 }}>
    <Text style={styles.title}> {title} </Text>
    <Text style={styles.description}> {description} </Text>
    <Text style={styles.price}> R$ {parseFloat(price).toFixed(2)}</Text>
  </View>
);
const MenuImage = ({ imageUrl }) => (
  <Image
    style={styles.image}
    source={{
      uri: imageUrl,
    }}
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
  },
  price: {
    color: '#263D42',
    fontWeight: 'bold',
  },
  wrapperView: {
    marginTop: 6,
    marginHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#c9c9c9',
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
