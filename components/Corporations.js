/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableNativeFeedback, Image, WebView} from 'react-native';
import { Navigation } from 'react-native-navigation';

import {getSheetUrl} from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';

export default class Corporations extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			corporations: null
		}
	}

	static get options() {
    return {
      topBar: {
        title: {
          text: 'Corporations'
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
	    	  })
	    	})
	  })
	}

	componentDidMount(){
		this.handleSheet("corporations");
		addIconTopBar("Corporations");
	}

	render() {
		return (
		  <ScrollView>
  	  		{this.state.corporations == null ? <Text>Loading</Text> : this.state.corporations.map((corporation, index) => {
  	  		  return(
  	  		    <TouchableNativeFeedback key={index}>
								<View>
									<Image style={{ height: 128, width: 128, borderRadius: 50, resizeMode: 'contain'}} source={{ uri: corporation.logo }}/>
									<Text>{corporation.name}</Text>
								</View>
							</TouchableNativeFeedback>
  	  		  )
  	  		})}
		  </ScrollView>
		);
	}
}
