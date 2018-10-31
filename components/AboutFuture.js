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

export default class AboutFuture extends Component {

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
              title: 'About Future'
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
		this.handleSheet("about");
		addIconTopBar("AboutFuture");
	}

	componentWillUnmount(){
		this.setState({
			mounted: false
		})
	}

	render() {
		return (
		  <ScrollView>
  	  		{!this.state.about ? <LoadingCircle/> : this.state.about.map((about, index) => {
            if(about.name == "Future"){
  	  		    return(
						  		<View key={index}>
						  			<Image style={{ height: 250, resizeMode: 'contain'}} source={{ uri: about.picture }}/>
										<View style={styles.aboutWrapper}>
											<Text style={styles.aboutTitle}>Future 4.0</Text>
						  				<Text style={styles.aboutDesc}>{about.description}</Text>
										</View>
						  		</View>
  	  		    )
            }
  	  		})}
		  </ScrollView>
		);
	}
}
