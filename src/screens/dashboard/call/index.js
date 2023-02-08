import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import GLOBALS from '../../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Prajjwal Gupta',
    message: 'How are you',
    time: 'Today, 02:12 PM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Tarun Pal',
    message: 'How are you',
    time: 'Yesterday, 06:12 AM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Nikhil Arora',
    message: 'How are you',
    time: 'Tomorrow, 02:12 PM',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Prajjwal Gupta',
    message: 'How are you',
    time: 'Today, 02:12 PM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Tarun Pal',
    message: 'How are you',
    time: 'Today, 02:12 PM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Nikhil Arora',
    message: 'How are you',
    time: 'Today, 02:12 PM',
  },
];

const Call = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLOR.PRIMARY,
          height: 60,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            marginTop: 10,
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          Recent Calls
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.4,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              Alert.alert('Search Option', 'Search Button Pressed');
            }}>
            <Icon
              name="search-sharp"
              size={35}
              color={'white'}
              style={{marginTop: 10}}></Icon>
          </TouchableOpacity>

          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              Alert.alert('Menu Option', 'Menu Button Pressed');
            }}>
            <Icon
              name="ellipsis-vertical-sharp"
              size={35}
              color={'white'}
              style={{marginTop: 10}}></Icon>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 5}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('')}
              style={styles.touchableOpacityStyle}>
              <View style={styles.item}>
                <View style={{flex: 0.4}}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => Alert.alert('Profile photo in progress')}
                    style={styles.touchableOpacityStyle}>
                    <Image
                      source={IMAGE.profilePic}
                      style={styles.floatingButtonStyle}></Image>
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1.5, flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.message}>{item.time}</Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 0.7,
                      flexDirection: 'row',
                      marginBottom: 15,
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={IMAGE.incoming}
                      style={{width: '40%', height: '50%', marginBottom: 5}}
                    />

                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() => {
                        Alert.alert('Search Option', 'Search Button Pressed');
                      }}>
                      <Icon
                        name="call"
                        size={30}
                        style={{marginTop: 10}}></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',

    padding: 9,
    marginVertical: 5,
    marginHorizontal: 16,
    borderBottomColor: COLOR.PRIMARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.MulishRegular,
    color: COLOR.TEXTCOLOR,
  },
  message: {
    marginTop: 3,
    fontSize: 15,
    fontFamily: FONTS.MulishRegular,
    color: COLOR.TEXTCOLOR,
  },
  date: {
    fontSize: 14,
    fontFamily: FONTS.MulishRegular,
    color: COLOR.TEXTCOLOR,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
  },

  child: {
    width: 70,
    marginTop: 15,
    paddingLeft: 10,
  },
});

export default Call;
