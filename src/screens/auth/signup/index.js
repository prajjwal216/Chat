import React from 'react';
import CustomTextInput from '../../../components/common/Custominput';
import {Text, View, Button, TextInput} from 'react-native';
import styles from './style';
import CustomButton from '../../../components/common/CustomButton';

export default Signup = ({navigation}) => {
  const text =
    'Please confirm your country code and enter\nyour phone number/email';
  return (
    <View style={styles.mainView}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={styles.mainHeading}>Enter Your Email / Phone Number</Text>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.numberView}>
          <TextInput style={styles.code} />
          <TextInput style={styles.number} placeholder={'Phone Number'} />
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
