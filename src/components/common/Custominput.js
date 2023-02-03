import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomTextInput = ({style}) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder="Enter text here"
        onChangeText={text => setValue(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: windowWidth,
  },
});

export default CustomTextInput;
