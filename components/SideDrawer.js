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
        <Text> Logo </Text>

				<DrawerButton text="Home" icon="home-outline" screen="HomeScreen" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Schedule" icon="schedule" screen="Schedule" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Corporations" icon="business" screen="Corporations" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Startups" icon="lightbulb-on-outline" screen="Startups" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="About Saša" icon="info-outline" screen="AboutSasa" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="About Future" icon="perm-identity" screen="AboutFuture" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Stakeholders" icon="people-outline" screen="Stakeholders" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				<DrawerButton text="Interact" icon="checkbox-marked-outline" screen="Interact" currentScreen={this.state.currentScreen} updateCurrentScreen={this.updateCurrentScreen}/>
				
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