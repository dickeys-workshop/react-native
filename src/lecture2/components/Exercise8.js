import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';


const MainContent = TabNavigator(
  {
    OrderTab: {
      screen: Exercise1,
      navigationOptions: () => ({
        tabBarLabel: 'Order',
        titleStyle: {
          color: '#FFFFFF'
        }
      })
    },
    MoreTab: {
      screen: Exercise4,
      navigationOptions: () => ({
        tabBarLabel: 'More',
        titleStyle: {
          color: '#FFFFFF'
        }
      })
    }
  },
  {
    initialRouteName: 'OrderTab',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  }
);



const TopNavigator = StackNavigator({
  MainRoute: {
    screen: MainContent,
    navigationOptions: {
      header: null
    }
  },
  Second: {
    screen: Exercise2,
    navigationOptions: ({ navigation: { state: { params = {} } } }) => ({
      title: params.title
    })
  },
  Third: {
    screen: Exercise3,
    navigationOptions: {
      title: 'Third screen'
    }
  },
}, {
  initialRouteName: 'MainRoute',
  mode: 'modal',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'red'
    },
    headerTitleStyle:{
      alignSelf:'center'
    },
    headerTintColor: 'black',
    headerLeft:
      <Button
        title="Cancel"
        onPress={() => navigation.goBack()}
      />

  })
});

export default TopNavigator;
