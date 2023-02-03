import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Dimensions} from 'react-native';
import GLOBALS from '../../../assets/index';

const windowWidth = Dimensions.get('window').width;
const {FONTS, COLOR} = GLOBALS;

const CustomTextInput = ({style, placeholder}) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        onChangeText={text => setValue(text)}
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
    backgroundColor: COLOR.BACK,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontFamily: FONTS.MulishRegular,
    fontSize: 16,
    color: COLOR.TEXTCOLOR,
  },
});

export default CustomTextInput;
