import React, {useState, useEffect} from 'react';
import Home from '../../screens/dashboard/home';
import Settings from '../../screens/dashboard/settings';
import Calls from '../../screens/dashboard/call';
import Chat from '../../screens/dashboard/chat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GLOBALS from '../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {FONTS, COLOR} = GLOBALS;

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerShown: false,
        //tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: Platform.OS === 'android' ? 10 : 15,
          shadowOpacity: 1,
          shadowRadius: 40,
          shadowOffset: {},
          shadowColor: COLOR.SHADOW,
          alignContent: 'center',
          height: 50,
          backgroundColor: COLOR.PRIMARY,
          borderRadius: 20,
          borderBottomRightRadius: Platform.OS === 'ios' ? 45 : null,
          borderBottomLeftRadius: Platform.OS === 'ios' ? 45 : null,
        },
        tabBarActiveTintColor: 'black',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Calls') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }
          return (
            <Icon
              name={iconName}
              size={30}
              color="white"
              style={{marginLeft: 20}}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
