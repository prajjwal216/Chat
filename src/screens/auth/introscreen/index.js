import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import IMAGE from '../../../../assets/images';
import CustomButton from '../../../components/common/CustomButton';

const Introscreen = ({navigation}) => {
  const text =
    'Connect easily with your family and\nfriends worldwide with Void';
  return (
    <View style={styles.View}>
      <View style={styles.topView}>
        <View style={styles.imageView}>
          <Image source={IMAGE.welcomeImage} />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.welcomeText}>{text}</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.Policy}>Terms & Privacy Policy</Text>
        <CustomButton
          title={'Start Messaging'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Introscreen;
