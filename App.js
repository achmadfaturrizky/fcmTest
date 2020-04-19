import React, {Component} from 'react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import Navigation from './src/Navigation';

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('59bd33f9-7bb6-4e28-b7b0-baee3f586b16', {
      kOSSettingsKeyAutoPrompt: false,
    }); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillMount = () => {
    OneSignal.inFocusDisplaying(2);
  };
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult, props) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}

export default App;
