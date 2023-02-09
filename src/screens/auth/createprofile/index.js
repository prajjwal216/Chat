import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import CustomTextInput from '../../../components/common/Custominput';
import CustomButton from '../../../components/common/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageLoad from 'react-native-image-placeholder';
import styles from './style';
import firestore from '@react-native-firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomRadio from '../../../components/common/customRadio';
import DateTimePicker from 'react-native-modal-datetime-picker';

import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default Createprofile = ({route, navigation}) => {
  const id = route.params;
  const phone = route.params;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateofbirth, setdateofbirth] = useState('');
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

  const getDate = date => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setdateofbirth(getDate(date));
    hideDatePicker();
    setFormData(Object.assign({}, formData, {dob: date}));
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
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: COLOR.PRIMARY,
              height: 40,
              width: '100%',
              backgroundColor: COLOR.LIGHTGREY,
              borderRadius: 5,
              fontSize: 16,
              marginTop: 5,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: FONTS.MulishRegular,
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: 10,
                color: COLOR.BLACK,
              }}>
              {dateofbirth}
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                marginRight: 10,
                flex: 0.99,
              }}
              onPress={showDatePicker}>
              <Image
                source={IMAGE.icon_calendar}
                style={{height: 35, width: 35}}
              />

              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display={'inline'}
              />
            </TouchableOpacity>
          </View>

          <CustomRadio label={'Gender'} selectedbtn={text => {}} />
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
