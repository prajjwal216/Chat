import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../../screens/auth/signup';
import Introscreen from '../../screens/auth/introscreen';
import Createprofile from '../../screens/auth/createprofile';
import Tabnavigation from '../tabnavigator';
import Chatscreen from '../../screens/dashboard/chatscreen';
import Account from '../../screens/dashboard/account';
import Userlist from '../../screens/dashboard/userlist';

const Stack = createNativeStackNavigator();

export default function Authnavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Introscreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Introscreen" component={Introscreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Createprofile" component={Createprofile} />
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="Chatscreen" component={Chatscreen} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Userlist" component={Userlist} />
    </Stack.Navigator>
  );
}
