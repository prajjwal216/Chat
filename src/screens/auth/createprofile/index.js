import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default Createprofile = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Createprofile</Text>

      <Button
        title="Continue"
        onPress={() => navigation.navigate('Tabnavigation')}
      />
    </View>
  );
};
