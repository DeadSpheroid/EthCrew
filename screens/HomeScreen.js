import React from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from '@rneui/base';
import tw from 'twrnc'
import NavOptions from '../components/NavOptions';
// import SearchInputAutocomplete from '../components/SearchInputAutocomplete';
// import { RecentRides } from '../data/mock';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`w-full h-full bg-white`}>
      <View style={tw`flex-1`}>
        <KeyboardAvoidingView
          style={tw`flex-1`}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 300 : -0}
        >
          <View style={tw`p-5`}>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={require('../assets/images/logo.png')}
            />
            <NavOptions/>
            {/* <NavOptions /> */}
            {/* <SearchInputAutocomplete
              iconName="search"
              placeholder="Where to?"
              type="origin"
            /> */}
          </View>
        </KeyboardAvoidingView>
      </View>
      <View>
        <FlatList
          style={tw`px-5`}
        //   data={RecentRides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`flex flex-row items-center mt-2`}>
              <View style={tw`-ml-3`}>
                <Icon
                  name="clock"
                  type="feather"
                  color="gray"
                  size={30}
                  tvParallaxProperties={undefined}
                  style={tw`p-2 rounded-full ml-2 mt-2 `}
                />
              </View>
              <View style={tw`flex-1 border-b-2 border-gray-100 p-2`}>
                <Text style={tw`text-base font-bold`}>{item.title}</Text>
                <Text style={tw`text-sm text-gray-500`}>
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
