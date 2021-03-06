import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery ');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text='Delivery '
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text='Pickup '
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.text)}
    style={{
      backgroundColor: props.text === props.activeTab ? 'black' : 'white',
      marginTop: 16,
      marginHorizontal: 2,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
  >
    <Text
      style={{
        color: props.text === props.activeTab ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
