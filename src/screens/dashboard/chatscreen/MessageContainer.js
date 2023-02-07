import React from 'react';
import GLOBALS from '../../../assets/index';

import {Bubble} from 'react-native-gifted-chat';
import {MessageText} from 'react-native-gifted-chat';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export const renderMessageText = props => (
  <MessageText
    {...props}
    customTextStyle={{
      fontSize: 18,
      lineHeight: 14,
      paddingTop: 13,
      fontWeight: '400',
    }}
  />
);

export const renderBubble = props => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        backgroundColor: 'lightgrey',
      },
      right: {
        backgroundColor: COLOR.PRIMARY,
      },
    }}
    timeTextStyle={{
      left: {
        color: '#000000',
      },
      right: {
        color: '#000000',
      },
    }}
    textStyle={{
      right: {
        color: '#000000',
      },
    }}
  />
);
