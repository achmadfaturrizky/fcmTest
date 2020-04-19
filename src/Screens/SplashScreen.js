import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Home extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 5000);
  };

  render() {
    return (
      <View>
        <Text>Splash</Text>
      </View>
    );
  }
}
