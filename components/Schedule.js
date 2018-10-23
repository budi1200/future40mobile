/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableNativeFeedback, Image, WebView, Dimensions, StyleSheet} from 'react-native';
import { Navigation } from 'react-native-navigation';

import {getSheetUrl} from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import LoadingCircle from './LoadingCircle';

export default class Schedule extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

    this.state = {
      schedule: null
    };
  }

	static get options() {
    return {
      topBar: {
        title: {
          text: 'Schedule'
        },
      }
    };
  }

	navigationButtonPressed({ buttonId }) {
    handleButtonPress(buttonId);
  }

	// Accepts sheet name
	// Calls getSheetUrl for sheet url
	// Fetches json at url
	// Outputs state with sheets name
	handleSheet = (sheet) => {
	  	getSheetUrl(sheet, (url) => {
	    	axios.get(url).then(result => {
	    	  this.setState({
	    	      [sheet]: result.data[sheet],
	    	  }, function(){ sheet == "schedule" ? console.log("a") : null})
	    	})
	  })
  }

	componentDidMount(){
		this.handleSheet("schedule");
    addIconTopBar("Schedule");
  }

	render() {
		return (
		  <ScrollView>

		  </ScrollView>
		);
	}
}