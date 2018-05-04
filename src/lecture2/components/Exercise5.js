import React, { Component } from 'react';
import { Button, Keyboard, TextInput, View, StyleSheet } from 'react-native';

export default class Example extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert('Keyboard Shown');
  }

  _keyboardDidHide() {
    alert('Keyboard Hidden');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Button title="Hide keyboard" onPress={Keyboard.dismiss}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '70%',
    padding: 10
  }
});