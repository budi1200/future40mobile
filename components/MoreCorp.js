/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation';

import {getSheetUrl} from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';

export default class MoreCorp extends Component {

	static get options() {
    return {
      topBar: {
        title: {
          text: 'Welcome123'
        },
      }
    };
  }

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			corporations: null
		}
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
	    	  })
	    	})
	  })
	}

	componentDidMount(){
		this.handleSheet("corporations");
		addIconTopBar("MoreCorp");
	}

	render() {
		return (
		  <View>
		  	<Text>World hello 321!</Text>
  	  		{this.state.corporations == null ? <Text>Loading</Text> : this.state.corporations.map((corporation, index) => {
  	  		  return(
  	  		    <Text key={index}>{corporation.name}</Text>
  	  		  )
  	  		})}
		  </View>
		);
	}
}
