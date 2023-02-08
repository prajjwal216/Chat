import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import CustomTextInput from '../../../components/common/Custominput';
import CustomButton from '../../../components/common/CustomButton';
import styles from './style';

export default Createprofile = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.profilePic}></View>
      <View style={styles.inputView}>
        <CustomTextInput placeholder={'Username (Required)'} />
        <CustomTextInput placeholder={'First Name (Required)'} />
        <CustomTextInput placeholder={'Last Name (Optional)'} />
        <CustomTextInput placeholder={'Date Of Birth (Optional) '} />
        <CustomTextInput placeholder={'Gender (Optional)'} />
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
