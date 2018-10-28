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
import moment from 'moment';

import {getSheetUrl} from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import LoadingCircle from './LoadingCircle';
import { styles } from './styles';

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
    
    for(var i = 0; i < this.state.schedule.length; i++){    
        if(uniqueNames.indexOf(moment(this.state.schedule[i].event_date).format('L')) === -1){
            uniqueNames.push(moment(this.state.schedule[i].event_date).format('L'));    
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

  componentDidAppear() {
    if(!this.props.first){
      addIconTopBar("Schedule2")
    }
  }

	render() {
		return (
		  <ScrollView style={{backgroundColor: 'white'}}>
				{this.state.schedule ? this.state.schedule.map((event, index) =>{
          if(moment(event.event_date).format('YYYY-MM-DD') == moment(this.props.day).format('YYYY-MM-DD')){
        	  return(
              <TouchableNativeFeedback key={index}>
        	      <View style={styles.scheduleWrapper}>

                  <View style={styles.scheduleBigTimeWrapper}>
                    <Text style={styles.scheduleBigTimeText}>{moment(event.time_from).format('HH:mm')}</Text>
                  </View>

                  <View style={styles.scheduleInfoWrapper}>
                    <Text style={styles.scheduleInfoText}>{event.title}</Text>
                    <Text style={styles.scheduleInfoDesc}>{moment(event.time_from).format('HH:mm')} - {moment(event.time_to).format('HH:mm')} / <Text style={styles.scheduleInfoRoom}>{event.room}</Text></Text>
                  </View>

                </View>
              </TouchableNativeFeedback>
        	  );
          }
        }) : <LoadingCircle/>} 
		  </ScrollView>
		);
	}
}