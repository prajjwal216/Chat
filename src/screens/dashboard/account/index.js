import React, {useState} from 'react';
import {Text, View, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageLoad from 'react-native-image-placeholder';
import styles from './style';
import GLOBALS from '../../../../assets/index';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  checkGalleryPermission,
  checkCameraPermission,
} from '../../../utils/permissions';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default Account = ({navigation}) => {
  const handlecamerapermission = () => {
    if (checkCameraPermission) {
      openCamera();
    }
  };

  const handleGalleryPermission = () => {
    if (checkGalleryPermission) {
      openGallery();
    }
  };
  const createThreeButtonAlert = () => {
    Alert.alert('Upload profile', 'using', [
      {
        text: 'Open Camera',
        onPress: () => handlecamerapermission(),
      },
      {
        text: 'Open Gallery',
        onPress: () => handleGalleryPermission(),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const openCamera = () => {
    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, res => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({uri: res.assets[0].uri});
      } else {
        Alert.alert('Image size should be less than 10 MB');
      }
    });
  };

  const openGallery = () => {
    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({uri: res.assets[0].uri});
      } else {
        Alert.alert('Image size should be less than 10 MB');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer_style}>
        <TouchableOpacity onPress={createThreeButtonAlert}>
          <ImageLoad style={styles.imageloadStyle} source={IMAGE.profilePic} />
          <Icon
            name="camera"
            size={40}
            color={'green'}
            style={{
              alignSelf: 'center',
              marginTop: 180,
              marginLeft: 165,
            }}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.body_container}>
        <TouchableOpacity
          style={styles.touchableheading}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Chatscreen')}>
          <Text style={styles.heading}>Request account info</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableheading}>
          <Text style={styles.heading}>Privacy</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableheading}>
          <Text style={styles.heading}>Security</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableheading}>
          <Text style={styles.heading}>Two-Step Verification</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableheading}>
          <Text style={styles.heading}>Change Number</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableheading}>
          <Text style={styles.heading}>Change Email</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={'#0A4975'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
