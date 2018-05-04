import React, { Component } from 'react'
import {
  Alert,
  ActivityIndicator,
  Button,
  StyleSheet,
  View,
} from 'react-native'

export default class App extends Component {
  displayAlert = () => (
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <ActivityIndicator size="large" color="#0000ff"/>
          <ActivityIndicator size="small" color="#00ff00"/>
        </View>
        <Button style={styles.button} title="Display alert" onPress={this.displayAlert}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  button: {
    alignSelf: 'center',
    padding: 20
  }
});