import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default Signup = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signup</Text>

      <Button
        title="Continue"
        onPress={() => navigation.navigate('Phoneverification')}
      />
    </View>
  );
};
