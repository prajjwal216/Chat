import React, {useEffect} from 'react';
import {Text, View, StatusBar, LogBox, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Authnavigation from './navigator/authnavigator';
import COLOR from './assets/color';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  Platform.OS === 'android' ? StatusBar.setBackgroundColor('white') : null;

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={{backgroundColor: COLOR.PRIMARY}} />
      <NavigationContainer>
        <Authnavigation />
      </NavigationContainer>
    </View>
  );
}
