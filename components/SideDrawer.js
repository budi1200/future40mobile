import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DrawerButton from './DrawerButton';
export default class SideDrawer extends Component {

	constructor(props){
		super(props)

		this.state = {
			currentScreen: this.props.def
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

				<DrawerButton text="Home" icon="home-outline" screen="HomeScreen" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Schedule" icon="none" screen="Schedule" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Corporations" icon="none" screen="Corporations" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Startups" icon="none" screen="Startups" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="About Saša" icon="none" screen="AboutSasa" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="About Future" icon="none" screen="AboutFuture" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Stakeholders" icon="none" screen="Stakeholders" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Interact" icon="none" screen="Interact" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				
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