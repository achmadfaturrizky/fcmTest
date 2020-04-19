import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/Home';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
});
