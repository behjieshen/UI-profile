import React, { Component } from 'react';
import { AppRegistry, ImageBackground, View, Text, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const windowHeight = window.height;
const windowWidth = window.width;

function applyLetterSpacing(string, count = 1) {
  return string.split('').join('\u200A'.repeat(count));
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718_960_720.jpg'
    };
    return (
      /*
      <View style={{width: '100%', height: '80%'}}>
        <ImageBackground source={pic} resizeMode={'cover'} style={{width: '100%', height: '100%'}}>
          <LinearGradient colors={['rgba(170,7,107,0.7)', 'rgba(97,4,95,0.7)']} style={{flex: 1}}>
            <View style={{position: 'absolute', bottom: 0, flexDirection:'row', marginBottom: 30, width: '100%', justifyContent: 'center'}}>
              <Button style={styles.followButton} containerStyle={styles.followButtonContainer}>
                <Text style={styles.followButtonText}>{applyLetterSpacing("FOLLOW JESSICA", 1)}</Text>
              </Button>
              <Button style={styles.moreButton} containerStyle={styles.moreButtonContainer}>
                ...
              </Button>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      */
      <ScrollView>
        <ImageBackground source={pic} resizeMode={'cover'} style={{width: windowWidth, height: (windowHeight * 0.8)}}>
          <LinearGradient colors={['rgba(170,7,107,0.7)', 'rgba(97,4,95,0.7)']} style={{ height: (windowHeight * 0.8) }} >
            <View style={{position: 'absolute', bottom: 0, flexDirection:'row', marginBottom: 30, width: '100%', justifyContent: 'center'}}>
              <Button style={styles.followButton} containerStyle={styles.followButtonContainer}>
                <Text style={styles.followButtonText}>{applyLetterSpacing("FOLLOW JESSICA", 1)}</Text>
              </Button>
              <Button style={styles.moreButton} containerStyle={styles.moreButtonContainer}>
                ...
              </Button>
            </View>
          </LinearGradient>
        </ImageBackground>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  followButton: {
    fontSize: 18,
    color: 'orange'
  },
  followButtonText: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    color: 'rgba(97,4,95,1)'
  },
  followButtonContainer: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 40,
    paddingRight: 40,
    height: 50,
    overflow: 'hidden',
    borderRadius: 60,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15
  },
  moreButton: {
    fontSize: 26,
    color: 'white'
  },
  moreButtonContainer: {
    paddingLeft: 14,
    paddingRight: 14,
    height: 51,
    overflow: 'hidden',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'silver',
    marginLeft: 15,
    marginRight: 15
  },
});
