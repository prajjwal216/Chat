import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import GLOBALS from '../../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';
const {FONTS, COLOR, IMAGE} = GLOBALS;

export default function Userlist() {
  const DATA = [
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: 'src/images/ic_chats_contacts.png',
      name: 'Tarun Pal',
      message: 'How are you',
      date: '02/12/23',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: 'src/images/ic_chats_contacts.png',
      name: 'Nikhil Arora',
      message: 'How are you',
      date: '02/12/23',
    },
  ];
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 0.1, backgroundColor: 'red'}}></View>
        <View style={{flex: 0.9}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Chatscreen')}
                style={styles.touchableOpacityStyle}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 9,
                    marginVertical: 5,
                    marginHorizontal: 16,
                    borderBottomColor: COLOR.PRIMARY,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}>
                  <View style={{flex: 0.4}}>
                    <TouchableOpacity
                      style={styles.touchableOpacityStyle}
                      activeOpacity={0.5}
                      onPress={() => setModalVisible(true)}>
                      <Image
                        source={IMAGE.profilePic}
                        style={styles.floatingButtonStyle}></Image>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex: 1.2, flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.message}>{item.message}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1}}>
                      <Text style={styles.date}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

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
    fontSize: 17,
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
  tabsContainer: {
    height: 35,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  tabStyle: {
    borderColor: COLOR.PRIMARY,
    borderRadius: 0,
  },
  activeTabStyle: {
    backgroundColor: COLOR.PRIMARY,
  },
  tabTextStyle: {
    color: COLOR.PRIMARY,
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeTabTextStyle: {
    color: 'white',
  },
});
