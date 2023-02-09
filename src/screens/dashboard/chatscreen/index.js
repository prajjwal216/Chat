import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {renderMessageText, renderBubble} from './MessageContainer';
import {renderInputToolbar, renderSend, renderActions} from './InputTool';
import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default function Chatscreen({navigation}) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 5,
        text: 'thik',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nikita',
          avatar:
            '/Users/prajjwalgupta/Documents/Chat/assets/images/Akshay-Kumar-Meme-templates-17.jpeg',
        },
      },
      {
        _id: 2,
        text: 'Badhia ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Nikita',
          avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
        },
      },
      {
        _id: 4,
        text: 'hello bhai, kaise ho',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nikita',
          avatar: '',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const [chatUser] = useState({
    name: 'Prajjwal Gupta',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Image
          style={styles.userProfileImage}
          source={{uri: chatUser.profile_image}}
        />
        <View
          style={{
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
            {chatUser.name}
          </Text>
          <Text style={{color: '#fff', fontWeight: '300'}}>
            {chatUser.last_seen}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 55}}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              Alert.alert('Audio Call', 'Audio Call Button Pressed');
            }}>
            <Icon name="call" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 10, marginLeft: 10}}
            onPress={() => {
              Alert.alert('Audio Call', 'Audio Call Button Pressed');
            }}>
            <Icon name="videocam" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={IMAGE.backImage} style={{height: '100%'}}>
        <View style={{flex: 1, paddingBottom: 60}}>
          <GiftedChat
            alignTop={true}
            renderSend={renderSend}
            renderMessageText={renderMessageText}
            renderInputToolbar={renderInputToolbar}
            renderActions={renderActions}
            messages={messages}
            renderBubble={renderBubble}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            wrapInSafeArea={false}
            alwaysShowSend
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
  },
  userProfileImage: {
    height: '100%',
    width: '10%',
    borderRadius: 100,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
