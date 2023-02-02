import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default Introscreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>introscreen</Text>
      <Button
        title="goto Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};
