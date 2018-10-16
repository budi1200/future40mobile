/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import axios from 'react-native-axios';

import {config} from '../fireConn';

firebase.initializeApp(config);

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      corporations: null
    }
  }

  getSheetUrl = (sheet, callback) => {
    firebase.database().ref('/').once('value', (data) => {
      return callback(data.val()[sheet])
    });
  }
  
  handleSheet = async(sheet) => {
    this.getSheetUrl(sheet, async(url) => {
      axios.get(url).then(result => {
        this.setState({
          [sheet]: result.data[sheet],
        })
        //console.log(result.data, "a");
      })
    })
  }

  componentDidMount(){
    //this.getSheetUrl("corporations", (data) => {console.log(data, "asd")});
    this.handleSheet("corporations")
  }

  render() {
    return (
      <View>
        <Text>Hello world 123!</Text>
        <Text>v1.4</Text>

        <Button/>
        {this.state.corporations ? console.log(this.state.corporations, "what") : null}
        {this.state.corporations == null ? <Text>Loading</Text> : this.state.corporations.map((corporation, index) => {
          return(
            <Text key={index}>{corporation.name}</Text>
          )
        })}
      </View>
    );
  }
}