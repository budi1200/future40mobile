import React, { Component } from 'react';
import { ScrollView, Text, Image, View, WebView, StyleSheet, Dimensions, TouchableNativeFeedback, Linking} from 'react-native';
import { styles } from './styles';

export default class DetailsSchedule extends Component{

  render(){
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
				<Text>{this.props.data.title}</Text>
      </ScrollView>
    );
  }
}