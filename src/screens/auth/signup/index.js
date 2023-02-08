import React, {useState} from 'react';
import CustomTextInput from '../../../components/common/Custominput';
import {
  Text,
  View,
  Button,
  Image,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import {CountryPicker} from 'react-native-country-codes-picker';
import CustomButton from '../../../components/common/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import FONTS from '../../../assets/fonts';
import auth from '@react-native-firebase/auth';

export default Signup = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState();
  const [countryCode, setCountryCode] = useState('+91');
  const [countryFlag, setCountryFlag] = useState('🇮🇳');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState('');
  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + phone);
    ToastAndroid.show('OTP sent successfully', ToastAndroid.BOTTOM);
    setConfirm(confirmation);
  };
  const confirmCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      navigation.navigate('Createprofile');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const text = 'Please confirm your country code and enter\nyour phone number';
  const text1 = `We have sent you an SMS with the code\non ${phone}`;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
      }}>
      {confirm == '' ? (
        <View style={styles.mainView}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.mainHeading}>Enter Your Phone Number</Text>
            <Text style={styles.text}>{text}</Text>

            <View style={styles.numberView}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.code}>
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
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.flag}>
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
              onPress={() => {
                signInWithPhoneNumber();
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.mainView}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text style={styles.mainHeading}>Enter Your Verification Code</Text>
            <Text style={styles.text}>{text1}</Text>

            <OTPInputView
              style={{
                width: '50%',
                height: 200,
                alignSelf: 'center',
              }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                setOtp(code);
              }}
            />
          </View>

          <View style={styles.bottomView}>
            <CustomButton title={'Verify OTP'} onPress={() => confirmCode()} />
          </View>
        </View>
      )}
    </View>
  );
};
