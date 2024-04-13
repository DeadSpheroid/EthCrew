import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import tw from 'twrnc';

import MapComponent from '../components/Map';
// import Ride from '../components/Ride';

const MapScreen = () => {
  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tw`h-full`}>        
        <View style={tw`h-1/2 `}>
            <MapComponent />
        </View>
        {/* <View style={tw`h-1/2`}>
          <Ride />
        </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;
