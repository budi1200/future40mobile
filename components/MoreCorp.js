/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {getSheetUrl} from './future40_data';
import axios from 'react-native-axios';

export default class MoreCorp extends Component {

	constructor(props){
		super(props)

		this.state = {
			corporations: null
		}
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

	componentWillMount(){
	  this.handleSheet("corporations");
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
