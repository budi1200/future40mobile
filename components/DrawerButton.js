import React, { Component } from 'react';
import { Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class DrawerButton extends Component{

	// Handles Drawer button click, accepts screen name
	handleClick = (screen) => {
			
		// Prevents crash if clicking on already selected screen
		if(screen != this.props.currentScreen){
			
			// Changes screen
			Navigation.setStackRoot('MainStack', {
				component: {
					id: this.props.screen,
					name: this.props.screen
				}
			});

			// Updates current screen name
			this.props.updateCurrentScreen(screen);

			// Closes the drawer
			Navigation.mergeOptions( 'SideMenu', {
				sideMenu: {
						left: {
								visible: false
						}
				}
			})
		}
	}

	render(){
	    return(
				<Button onPress={() => this.handleClick(this.props.screen)} title={this.props.text}/>
	    );
	}
}

export default DrawerButton;