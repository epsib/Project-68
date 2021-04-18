import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import Facebook from './screens/fb';
import Insta from './screens/in'




export default class App extends React.Component {
  render(){
       return (
          <AppContainer/>
       );
  }
}
const TabNavigator = createBottomTabNavigator({
    Facebook: {screen:Facebook},
    Insta: {screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator);


