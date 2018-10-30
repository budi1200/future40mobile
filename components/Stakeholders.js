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
import { styles } from './styles';

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
		  <ScrollView style={{backgroundColor: 'white'}}>

        { this.state.uniqueTypes ? this.state.uniqueTypes.map((type, index) => {
          return(
            <View key={index}>
              <Text style={styles.stakeholdersTypeText}>{type}</Text>
              {this.state.sponsors.map((sponsor, index2) => {
                if(sponsor.sponsor_type == type && sponsor.hidden == false){
                  return(
                    <TouchableNativeFeedback key={index2}>
                      <View style={styles.stakeholdersCardWrapper}>
                        <Image style={styles.stakeholdersCardImage} source={{ uri: sponsor.logo }}/>
                        <Text style={[styles.listCardText, styles.stakeholdersCardText]}>{sponsor.name}</Text>
                      </View>
                    </TouchableNativeFeedback>
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
