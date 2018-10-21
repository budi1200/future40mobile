/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Handle firebase connection
import firebase from 'firebase';
import { config } from '../fireConn';
import { addIconTopBar, handleButtonPress } from './customFunctions';
firebase.initializeApp(config);

export default class App extends Component {

	constructor(props){
  	super(props);

    Navigation.events().bindComponent(this);

    this.state = {
      corporations: null
    }

  }

  // Handler for navigation button presses
  navigationButtonPressed({ buttonId }) {

    // Custom button handle function, accepts button id
    handleButtonPress(buttonId);
  }

  // Set options for screen
  static get options() {
    return {
      topBar: {
        leftButtons: [
          {
            id: "DrawerButton",
            text: 'DrawerButton'
          }
        ],
        title: {
          text: 'Welcome'
        },
      }
    };
  }
  
  componentWillMount(){
    addIconTopBar("HomeScreen");
  }

  render() {
    return (
      <View>
        <Text>Hello world 123!</Text>
        <Text>v2.02122</Text>
      </View>
    );
  }
}