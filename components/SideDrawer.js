import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DrawerButton from './DrawerButton';
export default class SideDrawer extends Component {

	constructor(props){
		super(props)

		this.state = {
			currentScreen: 'HomeScreen'
		}
	}

	// Accepts Screen Name, Updates currentScreen State
	updateCurrentScreen = (screenName) => {
		this.setState({
			currentScreen: screenName
		})
	}
	
	render() {
    return (
      <View style={ styles.container }>
        <Text> SideDrawer </Text>

				<DrawerButton screen="HomeScreen" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen} icon="none" text="Home"/>
				<DrawerButton screen="MoreCorp" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen} icon="none" text="More Corp"/>
				
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
		//width: Dimensions.get("window").width * 0.65,
		height: '100%'
  }
});