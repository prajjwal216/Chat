import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import CustomTextInput from '../../../components/common/Custominput';
import CustomButton from '../../../components/common/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageLoad from 'react-native-image-placeholder';
import styles from './style';
import firestore from '@react-native-firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default Createprofile = ({route, navigation}) => {
  const id = route.params.id;
  const phone = route.params.phone;

  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const submit = () => {
    firestore().collection('users').doc(id).set({
      phone_number: phone,
      username: username,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      gender: gender,
    });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.main}>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            justifyContent: 'center',
            height: 200,
          }}>
          <ImageLoad style={styles.profilePic} source={IMAGE.profilePic} />
          <Icon
            name="add-circle"
            size={40}
            color={COLOR.PRIMARY}
            style={{marginLeft: 150}}></Icon>
        </View>
        <View style={styles.inputView}>
          <CustomTextInput
            placeholder={'Username (Required)'}
            value={username}
            onChangeText={value => setUsername(value)}
          />
          <CustomTextInput
            placeholder={'First Name (Required)'}
            style={{marginTop: 5}}
            value={firstname}
            onChangeText={value => setFirstname(value)}
          />
          <CustomTextInput
            placeholder={'Last Name (Optional)'}
            style={{marginTop: 5}}
            value={lastname}
            onChangeText={value => setLastname(value)}
          />
          <CustomTextInput
            placeholder={'Date Of Birth (Optional) '}
            style={{marginTop: 5}}
            value={dob}
            onChangeText={value => setDob(value)}
          />
          <CustomTextInput
            placeholder={'Gender (Optional)'}
            style={{marginTop: 5}}
            value={gender}
            onChangeText={value => setGender(value)}
          />
        </View>
        <View style={styles.bottomView}>
          <CustomButton
            title={'Continue'}
            // onPress={() => {
            //   navigation.reset({
            //     index: 1,
            //     routes: [
            //       {
            //         name: 'Tabnavigation',
            //         params: {someParam: 'Param1'},
            //       },
            //     ],
            //   });
            // }}
            onPress={() => submit()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
