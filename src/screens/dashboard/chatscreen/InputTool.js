import React from 'react';
import {InputToolbar, Send, View} from 'react-native-gifted-chat';
import GLOBALS from '../../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';
const {FONTS, COLOR, IMAGE} = GLOBALS;
import {Image} from 'react-native';

export const renderInputToolbar = props => (
  <InputToolbar
    {...props}
    containerStyle={{
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 30,
      borderTopWidth: 5,
      borderWidth: 5,
      borderColor: COLOR.PRIMARY,
      borderTopColor: COLOR.PRIMARY,
      height: 53,
    }}
  />
);

export const renderSend = props => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      backgroundColor: COLOR.PRIMARY,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,

      width: '15%',
      height: '106%',
    }}>
    <Icon
      name="send"
      size={30}
      color={'white'}
      style={{alignSelf: 'center', marginBottom: 7}}></Icon>
  </Send>
);
