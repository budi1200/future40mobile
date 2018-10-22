import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default class LoadingCircle extends Component{
  render(){
    return(
      <View style={styles.inner}><ActivityIndicator size="large" color="#00ff00"/></View>
    );
  }
}