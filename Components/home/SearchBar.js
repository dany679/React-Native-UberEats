import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
          textInput: {
            height: 38,
            fontSize: 16,
            color: '#5d5d5d',
            // backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
          },
          //   predefinedPlacesDescription: {
          //     color: '#1faadb',
          //   },
          textInputContainer: {
            flexDirection: 'row',
            // marginRight: 10,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 13,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <IonIcons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 6,
              backgroundColor: '#8f8f8f',
              borderRadius: 30,
            }}
          >
            <AntDesign name='clockcircle' size={12} color='white' />
            <Text style={{ color: '#fff' }}> Searching</Text>
          </View>
        )}
      />
    </View>
  );
}
