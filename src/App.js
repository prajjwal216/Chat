import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Authnavigation from './navigator/authnavigator';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <NavigationContainer>
        <Authnavigation />
      </NavigationContainer>
    </View>
  );
}
