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
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarActiveBackgroundColor: COLOR.PRIMARY,
        // headerStyle: {
        //   backgroundColor: '',
        //   borderBottomLeftRadius: 30,
        //   borderBottomRightRadius: 30,
        //   height: 60,
        // },

        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'white',
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
