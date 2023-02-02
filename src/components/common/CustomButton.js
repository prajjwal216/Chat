import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';
const {FONTS} = GLOBALS;

const CustomButton = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#58D582',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.MulishRegular,
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default CustomButton;
