// App.js
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NavigationService from './NavigationService';
import Home from './src/Screens/Home';
import Splash from './src/Screens/SplashScreen';

const TopLevelNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      NavigationService.navigate('Home', {userName: 'Lucy'});
    }, 1000);
  };

  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
