import React from 'react';
import Home from '../../screens/dashboard/home';
import Settings from '../../screens/dashboard/settings';
import Calls from '../../screens/dashboard/call';
import Chat from '../../screens/dashboard/chat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
