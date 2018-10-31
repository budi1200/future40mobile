/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import axios from 'react-native-axios';
import moment from 'moment';

import firebase from 'firebase';
import { config } from '../fireConn';

import LoadingCircle from './LoadingCircle';
import { getSheetUrl } from './future40_data';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import { styles } from './styles';

firebase.initializeApp(config);

export default class App extends Component {

	constructor(props){
  	super(props);

    Navigation.events().bindComponent(this);

    this.state = {
      mounted: true
    }
  }

  // Set options for screen
	static get options() {
    return {
      topBar: {
        title: {
          component: {
            name: 'CustomTopBarTitle',
            alignment: 'center',
            passProps: {
              title: 'Welcome'
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
          })
        }
      })
    })
  }
  
  componentWillMount(){
    // Loads sheet
    this.handleSheet("news");
    // Adds icon in the top bar
    addIconTopBar("HomeScreen");
  }

  componentWillUnmount(){
		this.setState({
			mounted: false
		})
	}

  render() {
    return (
      <ScrollView>
          <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}><Text>Banner Placeholder</Text></View>
  	  	    {!this.state.news ? <View style={styles.inner}><LoadingCircle/></View> : this.state.news.map((news, index) => {
              if(moment().isBetween(moment(news.show_from, "YYYY-MM-DD"), moment(news.show_to, "YYYY-MM-DD"), null, [])){
                return(
  	  	          <View key={index} style={styles.cardWrapper}>
                    <Image style={{ height: 200, width: '100%', resizeMode: 'cover', alignSelf: 'center', borderTopLeftRadius: 8, borderTopRightRadius: 8}} source={{ uri: news.picture }}/>
                    <View style={styles.cardTextWrapper}>
                      <Text style={[styles.cardTitle, {fontWeight: 'bold'}]}>{news.title}</Text>
                      <Text style={styles.cardDesc}>{news.description}</Text>
                    </View>
                  </View>
  	  	        )
              }
            })}
      </ScrollView>
    );
  }
}