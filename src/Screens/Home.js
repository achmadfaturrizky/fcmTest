import React from 'react';
import {
  View,
  Image,
  Text,
  ToastAndroid,
  AppState,
  TouchableOpacity,
} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      name: '',
      uid: '',
      url: '',
      userId: '',
      friendUID: '',
      friendName: '',
      friendUrl: '',
      friendStatus: '',
      deviceId: '',
      lastSeen: '',
    };
    OneSignal.init('59bd33f9-7bb6-4e28-b7b0-baee3f586b16');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.enableSound(true);
    OneSignal.configure();
  }
  componentWillMount = () => {
    this.getPushUserId();
    OneSignal.inFocusDisplaying(2);
  };

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    clearInterval(this.interval);
    clearInterval(this.lastSeenInterval);
  }

  onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  getPushUserId = () => {
    let userId = OneSignal.getPermissionSubscriptionState((data) => {
      console.log('aa', data.userId);
      return data.userId;
    });
    this.setState({userId: userId});
  };

  sendNotification = (data, name) => {
    let headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Basic YzkzYWJhZDYtMDYwMi00ZDkyLWIzYWUtOGMyZGFhYzUzNjI5',
    };

    let endpoint = 'https://onesignal.com/api/v1/notifications';

    let params = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        app_id: '59bd33f9-7bb6-4e28-b7b0-baee3f586b16',
        include_player_ids: ['94d00dc4-0612-4b56-923b-ea4ecf35f13e'],
        priority: 10,
        contents: {en: 'test'},
        headings: {en: 'test Header'},
      }),
    };
    fetch(endpoint, params).then((res) =>
      res.headers.forEach(function (value, key) {
        console.log('[' + key + '] = ' + value);
      }),
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.sendNotification}>
          <Text>Send Notif</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Chat;
