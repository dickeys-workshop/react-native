import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

// Exercise 1: Platform

export default function Exercise1({ navigation }) {

  return (
    <View style={styles.box}>
      <Text>This code is run on:</Text>
      <Text style={styles.basicText}>{Platform.OS}</Text>
      <Text>with version</Text>
      <Text style={styles.basicText}>{Platform.Version}</Text>
      <Text style={styles.platformDependent}>This text is red on ios and blue on android</Text>
      { navigation && <Button title="Navigate"  onPress={() => navigation.navigate('Second', { title: 'Custom title' })} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicText: {
    fontSize: 16,
    color: 'black',
  },
  platformDependent: {
    fontWeight: '700',
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'blue'
      }
    })
  }
});

