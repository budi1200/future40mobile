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
import LoadingCircle from './LoadingCircle';

export default class Stakeholders extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			sponsors: null
		}
	}

	static get options() {
    return {
      topBar: {
        title: {
          text: 'Stakeholders'
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
	    	  }, function(){ sheet == "sponsors" ? this.getTypes() : null})
	    	})
	  })
  }

  getTypes= () => {

    var uniqueNames = [];

    for(var i = 0; i < this.state.sponsors.length; i++){    
        if(uniqueNames.indexOf(this.state.sponsors[i].sponsor_type) === -1){
            uniqueNames.push(this.state.sponsors[i].sponsor_type);    
        }        
    }

    this.setState({
        uniqueTypes: uniqueNames
    })

  }

	componentDidMount(){
		this.handleSheet("sponsors");
		addIconTopBar("Stakeholders");
	}

	render() {
		return (
		  <ScrollView>

        { this.state.uniqueTypes ? this.state.uniqueTypes.map((type, index) => {
          return(
            <View key={index}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>{type}</Text>
              {this.state.sponsors.map((sponsor, index) => {
                if(sponsor.sponsor_type == type && sponsor.mobile_hidden == false){
                  return(
                    <View key={index}>
                      <Image style={{ height: 64, width: 64, borderRadius: 50, resizeMode: 'contain'}} source={{ uri: sponsor.logo }}/>
                      <Text>{sponsor.name}</Text>
                    </View>
                  )
                }
              })}
            </View>
          )
        }) : <LoadingCircle/>}
        
		  </ScrollView>
		);
	}
}
