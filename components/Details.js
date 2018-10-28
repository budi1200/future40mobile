import React, { Component } from 'react';
import { ScrollView, Text, Image, View, WebView} from 'react-native';
import ImageSliderz from 'react-native-image-slideshow';

export default class Details extends Component{

  
  render(){

    var slideshow = [];
    slideshow.push({"url" : this.props.data.logo})
    for (var i = 1; i <= 5; i++) {
      this.props.data["picture" + i] != "" ? slideshow.push({"url": this.props.data["picture" + i] }) : null ;
    }


    return(
      <ScrollView>
        <View>
        <ImageSliderz arrowSize={28} scrollEnabled={false} dataSource={slideshow} />
        </View>
        
        <View>
          <Text>{this.props.data.name}</Text>
          <Text>{this.props.data.website}</Text>
          <Text>Description:</Text>
          <Text>{this.props.data.description}</Text>
        </View>
      </ScrollView>
    );
  }
}