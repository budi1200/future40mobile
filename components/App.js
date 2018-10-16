/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

// Handle firebase connection
import firebase from 'firebase';
import {config} from '../fireConn';
firebase.initializeApp(config);

export default class App extends Component {

	constructor(props){
  	super(props);

    this.state = {
      corporations: null
    }
	}
  
  // Change screen to MoreCorp **TEMP**
	handleClick = () => {
    this.props.navigator.push({
      screen: 'MoreCorp',
      title: 'MoreCorp',
		});
	}

  render() {
    return (
      <View>
        <Text>Hello world 123!</Text>
        <Text>v1.5</Text>

        <Button onPress={this.handleClick} title="MoreCorp"/>
      </View>
    );
  }
}