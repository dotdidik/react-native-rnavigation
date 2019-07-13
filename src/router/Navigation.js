import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../components/parentView/Home/index'
import LikedScreen from '../components/parentView/Liked'
import DetailsScreen from '../components/details'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen

});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index >0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Liked: LikedScreen,
});


const MainNavigations = createAppContainer(TabNavigator)
// without the style you will see a blank screen
export default MainNavigations