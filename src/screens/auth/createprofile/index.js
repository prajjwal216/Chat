import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import CustomTextInput from '../../../components/common/Custominput';
import CustomButton from '../../../components/common/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageLoad from 'react-native-image-placeholder';
import styles from './style';
import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default Createprofile = ({navigation}) => {
  return (
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
        <CustomTextInput placeholder={'Username (Required)'} />
        <CustomTextInput
          placeholder={'First Name (Required)'}
          style={{marginTop: 5}}
        />
        <CustomTextInput
          placeholder={'Last Name (Optional)'}
          style={{marginTop: 5}}
        />
        <CustomTextInput
          placeholder={'Date Of Birth (Optional) '}
          style={{marginTop: 5}}
        />
        <CustomTextInput
          placeholder={'Gender (Optional)'}
          style={{marginTop: 5}}
        />
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          title={'Continue'}
          onPress={() => {
            navigation.reset({
              index: 1,
              routes: [
                {
                  name: 'Tabnavigation',
                  params: {someParam: 'Param1'},
                },
              ],
            });
          }}
        />
      </View>
    </View>
  );
};
