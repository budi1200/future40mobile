/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import getXFromSheet from './future40_data';

export default class DetailsStart extends Component {

    constructor(props){
        super(props);

        this.state = {}
    }

    // Accespts sheet page name, returns state with data from google sheet
    handleSheet = async(sheet) => {
        getXFromSheet(sheet).then(result =>{
            this.setState({
                [sheet]: result,
            });
        })
    }

    // Calls needed sheets
    componentWillMount() {
        this.handleSheet("corporations");
    }

    render() {
        return (
            <View>
                {!this.state.corporations ? <Text>Loading</Text> : 
                                            this.state.corporations.data.corporations.map((corporation, index) => {
                                                return(<Text key={index}>{corporation.name}</Text>)
                                            })}
                
            </View>
        );
    }
}
