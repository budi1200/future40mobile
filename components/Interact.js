/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, ScrollView, View, WebView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getSheetUrl } from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import LoadingCircle from './LoadingCircle';

export default class Interact extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			vote: null
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
              title: 'Interact'
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
	    	  this.setState({
	    	      [sheet]: result.data[sheet],
	    	  })
	    	})
	  })
	}

	componentDidMount(){
		this.handleSheet("vote");
		addIconTopBar("Interact");
	}

	render() {
		return (
		  <View>
  	  		{this.state.vote == null ? <LoadingCircle/> : this.state.vote.map((vote, index) => {
  	  		    return(
						  		<View key={index} style={{ height: '100%', width: '100%' }}>
                    <WebView source={{ uri: vote.url }} javaScriptEnabled={true} startInLoadingState={true}/>
						  		</View>
  	  		    )
  	  		})}
		  </View>
		);
	}
}
