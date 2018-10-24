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
	    	  }, function(){ sheet == "schedule" ? this.getDates() : null})
	    	})
	  })
	}
	
	// Returns state currentDates with sorted distinct dates from schedule page
	getDates = () => {

    var uniqueNames = [];
    
    for(var i = 0; i < this.state.schedule.data.schedule.length; i++){    
        if(uniqueNames.indexOf(moment(this.state.schedule.data.schedule[i].event_date).format('L')) === -1){
            uniqueNames.push(moment(this.state.schedule.data.schedule[i].event_date).format('L'));    
        }        
    }

    uniqueNames.sort(function(a,b){
        var da = new Date(a).getTime();
        var db = new Date(b).getTime();
        
        return da < db ? -1 : da > db ? 1 : 0
    });

    this.setState({
        convertedDates: uniqueNames
    })

  }

	componentDidMount(){
		this.handleSheet("schedule");
    addIconTopBar("Schedule");
  }

	render() {
		return (
		  <ScrollView>
				{this.state.convertedDates ? this.state.convertedDates.map((date, index) =>{
        	return(
        	    <li className={this.isActive(index)} key={index}><a data-toggle="pill" href={"#" + moment(date, 'MM/DD/YYYY').format('DDMMYYYY')}><h3>{this.state.dayStrings[index]} <span>Day</span></h3><p>{moment(date, 'MM/DD/YYYY').format('DD MMM, YYYY')}</p></a></li>
        	);
        }) : null} 
		  </ScrollView>
		);
	}
}