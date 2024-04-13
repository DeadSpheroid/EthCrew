import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import tw from 'twrnc';

const data = [
  {
    id: '1',
    title: 'Get a ride',
    icon: require('../assets/images/UberX-icon.webp'),
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order a food',
    icon: require('../assets/images/Uber-eats-icon.png'),
    screen: 'Eats',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          //@ts-ignore
          showsHorizontalScrollIndicator={false}
          onPress={() => navigation.navigate(item.screen)}
          style={tw`bg-gray-300 p-5 pl-6 pb-8 pt-4 m-2 w-40 rounded-lg`}
        >
          <View style={tw`flex`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={item.icon}
            />
            <View style={tw`flex flex-row items-center  flex-shrink`}>
              <Text style={tw`mt-2 font-bold text-lg flex-shrink`}>
                {item.title} 
              </Text>
              <Icon
                name="arrow-right"
                type="material-community"
                size={20}
                color="white"
                tvParallaxProperties={undefined}
                style={tw`p-2 rounded-full bg-black ml-2`}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavOptions;
