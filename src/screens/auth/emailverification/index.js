import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default Emailverification = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Emailverification</Text>

      <Button
        title="Continue"
        onPress={() => navigation.navigate('Createprofile')}
      />
    </View>
  );
};
