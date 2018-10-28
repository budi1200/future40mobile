/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getSheetUrl } from './future40_data';
import axios from 'react-native-axios';
import { addIconTopBar, handleButtonPress } from './customFunctions';
import LoadingCircle from './LoadingCircle';
import { styles } from './styles';

export default class AboutSasa extends Component {

	constructor(props){
		super(props)

		Navigation.events().bindComponent(this);

		this.state = {
			about: null
		}
	}

	static get options() {
    return {
      topBar: {
        title: {
          text: 'About Saša'
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
		this.handleSheet("about");
		addIconTopBar("AboutSasa");
	}

	render() {
		return (
		  <ScrollView>
  	  		{this.state.about == null ? <LoadingCircle/> : this.state.about.map((about, index) => {
            if(about.name == "Sasa"){
  	  		    return(
						  		<View key={index}>
						  			<Image style={{ height: 250, resizeMode: 'contain'}} source={{ uri: about.picture }}/>
						  			<View style={styles.aboutWrapper}>
											<Text>{about.description}</Text>
										</View>
						  		</View>
  	  		    )
            }
  	  		})}
		  </ScrollView>
		);
	}
}
