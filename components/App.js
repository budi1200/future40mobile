/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

// Handle firebase connection
import firebase from 'firebase';
import {config} from '../fireConn';
firebase.initializeApp(config);

export default class App extends Component {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Welcome'
        },
      }
    };
  }

	constructor(props){
  	super(props);

    this.state = {
      corporations: null
    }
	}
  
  // Change screen to MoreCorp **TEMP**
	handleClick = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'MoreCorp',
      }
    });
	}

  render() {
    return (
      <View>
        <Text>Hello world 123!</Text>
        <Text>v2.0</Text>

        <Button onPress={this.handleClick} title="MoreCorp"/>
      </View>
    );
  }
}