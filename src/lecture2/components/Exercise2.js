import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 31424, label: 'Devin'},
            {key: 1433211, label: 'Jackson'},
            {key: 324341, label: 'James'},
            {key: 32231, label: 'Joel'},
            {key: 1332, label: 'John'},
            {key: 4132231, label: 'Jillian'},
            {key: 431231, label: 'Jimmy'},
            {key: 13243432, label: 'Julie'},
            {key: 32321, label: 'Devin'},
            {key: 1234, label: 'Jackson'},
            {key: 1765653, label: 'James'},
            {key: 3733, label: 'Joel'},
            {key: 773571, label: 'John'},
            {key: 16767673, label: 'Jillian'},
            {key: 317376, label: 'Jimmy'},
            {key: 345751, label: 'Julie'},
            {key: 354751, label: 'Devin'},
            {key: 3573471, label: 'Jackson'},
            {key: 75388471, label: 'James'},
            {key: 878781, label: 'Joel'},
            {key: 556871, label: 'John'},
            {key: 8657861, label: 'Jillian'},
            {key: 568761, label: 'Jimmy'},
            {key: 8567885761, label: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.label}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
