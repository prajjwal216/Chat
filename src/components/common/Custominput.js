import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Dimensions} from 'react-native';
import GLOBALS from '../../assets/index';

const windowWidth = Dimensions.get('window').width;
const {FONTS, COLOR} = GLOBALS;

const CustomTextInput = ({style, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: COLOR.LIGHTGREY,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontFamily: FONTS.MulishRegular,
    fontSize: 16,
    color: COLOR.TEXTCOLOR,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
  },
});

export default CustomTextInput;
