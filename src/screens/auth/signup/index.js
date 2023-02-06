import React, {useState} from 'react';
import CustomTextInput from '../../../components/common/Custominput';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import {CountryPicker} from 'react-native-country-codes-picker';
import CustomButton from '../../../components/common/CustomButton';
import FONTS from '../../../../assets/fonts';
import phoneValidation from '../../../utils/validation';

export default Signup = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [countryFlag, setCountryFlag] = useState('🇮🇳');
  const [phone, setPhone] = useState('');

  console.log('flag', countryFlag);

  const text = 'Please confirm your country code and enter\nyour phone number';
  return (
    <View style={styles.mainView}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={styles.mainHeading}>Enter Your Phone Number</Text>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.numberView}>
          <TouchableOpacity onPress={() => setShow(true)} style={styles.code}>
            <Text
              style={{
                color: 'black',
                fontFamily: FONTS.MulishSemiBold,
                fontSize: 20,
              }}>
              {countryFlag}
            </Text>
          </TouchableOpacity>
          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setCountryFlag(item.flag);
              setShow(false);
            }}
          />
          <TouchableOpacity onPress={() => setShow(true)} style={styles.flag}>
            <Text
              style={{
                color: 'black',
                fontFamily: FONTS.MulishSemiBold,
                fontSize: 20,
              }}>
              {countryCode}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.number}
            maxLength={10}
            value={phone}
            onChangeText={number => setPhone(number)}
            keyboardType="number-pad"
            placeholder={'Phone Number'}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          title={'Continue'}
          onPress={() => navigation.navigate('Phoneverification')}
        />
      </View>
    </View>
  );
};
