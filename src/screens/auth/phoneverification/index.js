import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default Phoneverification = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Phoneverification</Text>

      <Button
        title="Continue"
        onPress={() => navigation.navigate('Emailverification')}
      />
    </View>
  );
};
