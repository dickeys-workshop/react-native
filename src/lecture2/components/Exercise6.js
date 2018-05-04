import React, { Component } from 'react'
import {
  NetInfo,
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class App extends Component {
  state = {
    type: '',
    effectiveType: ''
  };

  componentWillMount() {
    NetInfo.getConnectionInfo().then(this.setConnectionInfo);

    NetInfo.addEventListener('connectionChange', (info) => this.setConnectionInfo(info));
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange');
  }

  setConnectionInfo = ({ type, effectiveType }) => this.setState({ type, effectiveType });

  render() {
    return (
      <View style={styles.container}>
        <Text>Connection type: {this.state.type}</Text>
        <Text>Connection effective type: {this.state.effectiveType}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});