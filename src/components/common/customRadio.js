import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import GLOBALS from '../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';

const {FONTS, COLOR, IMAGE} = GLOBALS;

const data = [
  {
    label: 'Male',
  },
  {
    label: 'Female',
  },
];

const CustomRadio = ({name, rules = {}, label, selectedbtn}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{label}</Text>
      <RadioButtonRN
        boxStyle={styles.box}
        style={styles.radio}
        textStyle={styles.text}
        data={data}
        selectedBtn={selectedbtn}
        icon={<Icon name="radio-button-on-outline" size={25} color="#2c9dd1" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.LIGHTGREY,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    marginTop: 5,
  },
  radio: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    fontFamily: FONTS.MulishRegular,
  },
  heading: {
    fontFamily: FONTS.MulishRegular,
    fontSize: 18,
  },
  box: {
    height: 40,
    width: 160,
    marginLeft: 4,
  },
  text: {
    fontSize: 18,
    height: 40,
    top: 11,
    marginLeft: 10,
    fontFamily: FONTS.NunitoRegular,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomRadio;
