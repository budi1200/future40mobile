import React, { Component } from 'react';
import { Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
class DrawerButton extends Component{

	// Handles Drawer button click, accepts screen name
	handleClick = (screen) => {
			
		// Prevents crash if clicking on already selected screen
		if(screen != this.props.currentScreen){
			if(screen == "Schedule"){
				Navigation.setRoot({
					root: {
						sideMenu: {
							id: 'SideMenu',
							left: {
								component: {
									id: 'SideDrawer',
									name: 'SideDrawer',
									passProps: {
										def: 'Schedule'
									}
								}
							},
							center: {
								id: 'ChildTest',
								stack: {
									id: 'MainStack',
									children: [{
										bottomTabs: {
											children: [
												{
													component: {
														id: 'Schedule',
														name: 'Schedule',
														passProps: {
															day: '2018-11-27',
															first: true
														},
														options: {
															bottomTab: {
																text: 'Day 1',
																icon: require('./img/calendar.png'),
																selectedIconColor: 'blue',
															}
														}
													},
												},
												{
													component: {
														id: 'Schedule2',
														name: 'Schedule',
														passProps: {
															day: '2018-11-28'
														},
														options: {
															bottomTab: {
																text: 'Day 2',
																icon: require('./img/calendar.png'),
																selectedIconColor: 'blue',
															}
														}
													},
												},
											]
										}
									}]
								}
							}
						}
					}
				});
				
				// TODO: Remove?
				Navigation.mergeOptions( 'SideMenu', {
					sideMenu: {
						left: {
							visible: false
						}
					}
				})

			}else{

			// Changes screen
			Navigation.setStackRoot('MainStack', {
				component: {
					id: this.props.screen,
					name: this.props.screen
				}
			});

		}
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

	// TODO: Add Icons next to button
	render(){
	    return(
				<Button onPress={() => this.handleClick(this.props.screen)} title={this.props.text}/>
	    );
	}
}

export default DrawerButton;