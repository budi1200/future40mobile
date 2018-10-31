/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import axios from 'react-native-axios';
import moment from 'moment';

// Handle firebase connection
import firebase from 'firebase';
import { config } from '../fireConn';
import { getSheetUrl } from './future40_data';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import {styles} from './styles';
import LoadingCircle from './LoadingCircle';
firebase.initializeApp(config);

export default class App extends Component {

	constructor(props){
  	super(props);

    Navigation.events().bindComponent(this);

    this.state = {
      news: null
    }
  }

  handleSheet = (sheet) => {
    getSheetUrl(sheet, (url) => {
      axios.get(url).then(result => {
        this.setState({
            [sheet]: result.data[sheet],
        })
      })
    })
  }

  // Handler for navigation button presses
  navigationButtonPressed({ buttonId }) {
    // Custom button handle function, accepts button id
    handleButtonPress(buttonId);
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
  
  componentWillMount(){
    addIconTopBar("HomeScreen");
    this.handleSheet("news");
  }

  render() {
    return (
      <ScrollView>
          <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}><Text>Banner Placeholder</Text></View>
  	  	    {this.state.news == null ? <View style={styles.inner}><LoadingCircle/></View> : this.state.news.map((news, index) => {
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