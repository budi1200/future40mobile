/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableNativeFeedback, Platform, TouchableHighlight } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'react-native-axios';
import moment from 'moment';

import LoadingCircle from './LoadingCircle';
import { getSheetUrl } from './future40_data';
import { addIconTopBar, handleButtonPress, detailsSchedule } from './customFunctions';
import { styles } from './styles';

import { getStatusBarHeight } from 'react-native-status-bar-height';
export default class Schedule extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

    this.state = {
      mounted: true
    };
  }

	static get options() {
    return {
      topBar: {
        title: {
          component: {
            name: 'CustomTopBarTitle',
            alignment: 'center',
            passProps: {
              title: 'Schedule'
            }
          }
        },
      }
    };
  }

  // Handler for navigation button presses
  navigationButtonPressed({ buttonId }) {
    // Custom button handle function, accepts button id
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
          }, function(){ sheet == "schedule" ? this.getDates() : null})
        }
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
    // Load sheet
    this.handleSheet("schedule");
    // Adds icon in the top bar
    addIconTopBar("Schedule");
  }

  componentDidAppear() {
    if(!this.props.first){
      addIconTopBar("Schedule2")
    }
  }

  componentWillUnmount(){
		this.setState({
			mounted: false
		})
	}

	render() {

    console.log(getStatusBarHeight());
    if(Platform.OS == "android"){
		  return (
		    <ScrollView style={{backgroundColor: 'white'}}>
		  		{this.state.schedule ? this.state.schedule.map((event, index) =>{
            if(moment(event.event_date).format('YYYY-MM-DD') == moment(this.props.day).format('YYYY-MM-DD')){
          	    return(
                  <TouchableNativeFeedback key={index} onPress={() => {detailsSchedule(event, "MainStack")}}>
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
    else{
		  return (
        <View>
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',paddingTop: getStatusBarHeight(), borderBottomColor: '#DCDEE2', borderBottomWidth: 1}}>
            <MaterialIcons name="menu" color="#1078FF" size={20} style={{flex: 1, paddingLeft: 22}}/>
            <Text style={{flex: 1, fontSize: 20, color: 'black', paddingTop: 10, paddingBottom: 10}}>Schedule</Text>
            <View style={{flex: 1}}></View>
          </View>
		      <ScrollView style={{backgroundColor: 'white'}}>
		  	  	{this.state.schedule ? this.state.schedule.map((event, index) =>{
              if(moment(event.event_date).format('YYYY-MM-DD') == moment(this.props.day).format('YYYY-MM-DD')){
            	    return(
                    <TouchableHighlight underlayColor={'rgba(52,73,85,0.1)'} key={index} onPress={() => {detailsSchedule(event, "MainStack")}}>
            	        <View style={styles.scheduleWrapper}>

                        <View style={styles.scheduleBigTimeWrapper}>
                          <Text style={styles.scheduleBigTimeText}>{moment(event.time_from).format('HH:mm')}</Text>
                        </View>

                        <View style={styles.scheduleInfoWrapper}>
                          <Text style={styles.scheduleInfoText}>{event.title}</Text>
                          <Text style={styles.scheduleInfoDesc}>{moment(event.time_from).format('HH:mm')} - {moment(event.time_to).format('HH:mm')} / <Text style={styles.scheduleInfoRoom}>{event.room}</Text></Text>
                        </View>

                      </View>
                    </TouchableHighlight>
            	    );
                }
            }) : <LoadingCircle/>} 
		      </ScrollView>
        </View>
      );
    }
	}
}