import React, { Component } from 'react';
import {Text, View} from 'react-native';
//const firebase = require("firebase");
import firebase from 'firebase';

class Fire extends Component{

    constructor(props){
        super(props);

        this.state = {
            corp: ""
        }
    }

    initializeFirebase = () => {

        // Initialize Firebase
        var config = {
            databaseURL: "https://future40-216417.firebaseio.com",
            projectID: "future40-216417"
        };
        firebase.initializeApp(config);
        this.setState({
            corp: "init"
        }, this.readUserData())
    }

    componentWillMount(){
        this.initializeFirebase();
    }

    readUserData = () => {
        //const firebase = require("firebase");
        firebase.database().ref('/').once('value', (snapshot) => {
            console.log(snapshot.val())
            this.setState({
                corp: snapshot.val().corporations
            })
        });
        /*this.setState({
            corp: firebase.database().ref('/').once('value')
        })*/
    }

    componentDidMount(){
        //this.readUserData();
    }

    render(){
        return(
            <View>
                <Text>--------------------</Text>
                <Text>{this.state.corp}</Text>
            </View>
        );
    }
}

export default Fire;