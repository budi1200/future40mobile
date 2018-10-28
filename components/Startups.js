/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableNativeFeedback, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ImageSvg from 'react-native-remote-svg'

import { getSheetUrl } from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import LoadingCircle from './LoadingCircle';
import { styles } from './styles';

export default class Startups extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			startups: null
		}
	}

	static get options() {
    return {
      topBar: {
        title: {
          text: 'Startups'
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
		this.handleSheet("startups");
		addIconTopBar("Startups");
	}

	render() {
		return (
		  <ScrollView>
  	  		{this.state.startups == null ? <LoadingCircle/> : this.state.startups.map((startup, index) => {
  	  		  return(
  	  		    <TouchableNativeFeedback key={index}>
								<View style={styles.listCardWrapper}>
									{(startup.logo).slice(-3) === "svg" ? <ImageSvg style={styles.listCardImage} source={{ uri: startup.logo }}/> : <Image style={styles.listCardImage} source={{ uri: startup.logo }}/>}
									<Text style={styles.listCardText}>{startup.name}</Text>
								</View>
							</TouchableNativeFeedback>
  	  		  )
  	  		})}
		  </ScrollView>
		);
	}
}
