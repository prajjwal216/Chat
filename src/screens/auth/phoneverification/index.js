import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import CustomButton from '../../../components/common/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default Phoneverification = ({route, navigation}) => {
  const phnnumber = route.params.phone;
  const text = `We have sent you an SMS with the code on ${phnnumber}`;

  return (
    <View style={styles.mainView}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.mainHeading}>Enter Your Verification</Text>
        <Text style={styles.text}>{text}</Text>

        <OTPInputView
          style={{width: '50%', height: 200, marginRight: 20}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            <Text style={{}}>`Code is ${code}, you are good to go!`</Text>;
          }}
        />
      </View>

      <View style={styles.bottomView}>
        <CustomButton
          title={'Continue'}
          onPress={() => navigation.navigate('Createprofile')}
        />
      </View>
    </View>
  );
};
