import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">

      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <Icon name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>

        <Icon name="md-person" size={35} color="#00CCBB" />
      </View>


      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MaterialIcons name="search" size={25} color="gray" />
          <TextInput placeholder='Restaurants and cuisine' keyboardType='default' />
        </View>
        <Icon name="md-options" size={25} color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
        id="123"
          title="Restaurants Populaires"
          description="Paid placements from our partners"
        />
        <FeaturedRow
        id="1234"
          title="Les Mieux Visités"
          description="Paid placements from our partners"
        />
        <FeaturedRow
        id="12345"
          title="Restaurants de la référence"
          description="Paid placements from our partners"
        />

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen