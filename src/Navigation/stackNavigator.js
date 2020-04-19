import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/Home';
import Order from "../Screens/OrderScreen";

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      headerShown: false,
    },
  },
});
