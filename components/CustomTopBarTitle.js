import React, { Component } from 'react';
import { Text } from 'react-native';

export default class CustomTopBarTitle extends Component{
  render(){
    return(
      <Text>{this.props.title}</Text>
    );
  }
}