import React, { Component } from 'react'
import {
  Alert,
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native'

export default class App extends Component {
  write1 = () => AsyncStorage.multiSet([['k1', 'val1'], ['k2', 'val2']], (err) => err && Alert.alert('Error', err));
  read1 = () => AsyncStorage.multiGet(['k1', 'k2'], (err, res) => {
   if (err) {
     Alert.alert('Error', err);
   } else {
     Alert.alert('Store', res.toString());
   }
  });


  write2 = () => {
    const a = 2357, b = 4442;
    AsyncStorage.multiSet([['k3', a.toString()], ['k4', b.toString()]], (err) => err && Alert.alert('Error', err));
  };
  read2 = () => AsyncStorage.multiGet(['k3', 'k4'], (err, res) => {
    if (err) {
      Alert.alert('Error', err);
    } else {
      Alert.alert('Store', res.toString());
    }
  });

  write3 = () => AsyncStorage.setItem('k5', JSON.stringify({ a: 'uegquf', b: null, c: 32233 }));
  read3 = () => AsyncStorage.getItem('k5', (err, res) => {
    if (err) {
      Alert.alert('Error', err);
    } else {
      Alert.alert('Store', res);
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} title="Add to storage 1" onPress={this.write1}/>
        <Button style={styles.button} title="Read from storage 1" onPress={this.read1}/>
        <View style={styles.padding} />
        <Button style={styles.button} title="Add to storage 2" onPress={this.write2}/>
        <Button style={styles.button} title="Read from storage 2" onPress={this.read2}/>
        <View style={styles.padding} />
        <Button style={styles.button} title="Add to storage 3" onPress={this.write3}/>
        <Button style={styles.button} title="Read from storage 3" onPress={this.read3}/>
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
  },
  padding: {
    height: 50
  }
});