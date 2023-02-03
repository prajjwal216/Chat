import React from 'react';
import Home from '../../screens/dashboard/home';
import Settings from '../../screens/dashboard/settings';
import Calls from '../../screens/dashboard/call';
import Chat from '../../screens/dashboard/chat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GLOBALS from '../../../assets/index';
const {FONTS, COLOR} = GLOBALS;

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarShowLabel: true,
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarStyle: {
          margin: 20,
          alignContent: 'center',
          paddingBottom: 10,
          height: 90,
          borderRadius: 30,
          backgroundColor: COLOR.PRIMARY,
        },
        tabBarActiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
