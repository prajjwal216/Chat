import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../../screens/auth/signup';
import Introscreen from '../../screens/auth/introscreen';
import Phoneverification from '../../screens/auth/phoneverification';
import Emailverification from '../../screens/auth/emailverification/index';
import Createprofile from '../../screens/auth/createprofile';
import Tabnavigation from '../tabnavigator';

const Stack = createNativeStackNavigator();

export default function Authnavigation() {
  return (
    <Stack.Navigator initialRouteName="Introscreen">
      <Stack.Screen name="Introscreen" component={Introscreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Phoneverification" component={Phoneverification} />
      <Stack.Screen name="Emailverification" component={Emailverification} />
      <Stack.Screen name="Createprofile" component={Createprofile} />
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
    </Stack.Navigator>
  );
}