import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './stackNavigator';
import SplashScreen from '../Screens/SplashScreen';

const switchNavigator = createSwitchNavigator({
  SplashScreen,
  Home,
});

export default createAppContainer(switchNavigator);
