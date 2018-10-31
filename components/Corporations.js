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
import { addIconTopBar, handleButtonPress, changeScreen } from './customFunctions';
import LoadingCircle from './LoadingCircle';
import { styles } from './styles';

export default class Corporations extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			mounted: true
		}
	}

	static get options() {
    return {
      topBar: {
        title: {
          component: {
            name: 'CustomTopBarTitle',
            alignment: 'center',
            passProps: {
              title: 'Corporations'
            }
          }
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
					if(this.state.mounted){
	    	  	this.setState({
	    	  	    [sheet]: result.data[sheet],
						})
					}
	    	})
	  })
	}

	componentDidMount(){
		this.handleSheet("corporations");
		addIconTopBar("Corporations");
	}

	componentWillUnmount(){
		this.setState({
			mounted: false
		})
	}

	render() {
		return (
		  <ScrollView style={{backgroundColor: 'white', marginTop: 4, marginBottom: 4}}>
  	  		{!this.state.corporations ? <LoadingCircle/> : this.state.corporations.map((corporation, index) => {
						if(corporation.hidden == false){
  	  		  	return(
  	  		  	  <TouchableNativeFeedback key={index} onPress={() => {changeScreen(corporation, "Corporations")}}>
									<View style={styles.listCardWrapper}>
										<Image style={styles.listCardImage} source={{ uri: corporation.logo }}/>
										<Text style={styles.listCardText}>{corporation.name}</Text>
									</View>
								</TouchableNativeFeedback>
  	  		  	)
						}
  	  		})}
		  </ScrollView>
		);
	}
}
