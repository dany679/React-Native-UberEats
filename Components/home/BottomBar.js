import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomBar({ navigation }) {
  // const  defaultColor ='002529'
  // const  use =  '#005C66';
  const [active, setActive] = useState('home');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
      }}
    >
      <Icon
        name={'home'}
        navigation={navigation}
        active={active}
        setActive={setActive}
        screen={'Home'}
      />
      <Icon name={'heart'} active={active} setActive={setActive} />
      <Icon
        name={'receipt'}
        title={'Orders'}
        active={active}
        setActive={setActive}
      />
      <Icon
        name={'user'}
        title={'account'}
        active={active}
        setActive={setActive}
        navigation={navigation}
        screen={'About'}
      />
    </View>
  );
}

const Icon = ({ name, title, active, setActive, navigation ,screen}) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      setActive(name);
      navigation?.navigate(screen ?screen:name);
    }}
  >
    <View style={{ alignItems: 'center' }}>
      <FontAwesome5
        name={name}
        size={24}
        alignItems='center'
        color={name === active ? '#006C7A' : '#002529'}
      />
      <Text
        style={{
          textTransform: 'capitalize',
          color: name === active ? '#006C7A' : '#002529',
        }}
      >
        {title ? title : name}
      </Text>
    </View>
  </TouchableOpacity>
);
