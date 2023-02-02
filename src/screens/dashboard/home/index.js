import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import COLOR from '../../../../assets/color';

export default Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.GREEN,
      }}>
      <Text>Home page</Text>
    </View>
  );
};
