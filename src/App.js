import React from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Authnavigation from './navigator/authnavigator';
import COLOR from '../assets/color';

export default function App() {
  Platform.OS === 'android'
    ? StatusBar.setBackgroundColor(COLOR.PRIMARY)
    : null;

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLOR.PRIMARY}} />
      <NavigationContainer>
        <Authnavigation />
      </NavigationContainer>
    </View>
  );
}
