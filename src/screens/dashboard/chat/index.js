import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import GLOBALS from '../../../assets/index';
import Entypo from 'react-native-vector-icons/Entypo';

const {FONTS, COLOR, IMAGE} = GLOBALS;

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

const colors = [
  'tomato',
  'thistle',
  'skyblue',
  'teal',
  'tomato',
  'thistle',
  'skyblue',
  'teal',
  'tomato',
  'thistle',
  'skyblue',
  'teal',
  'tomato',
  'thistle',
  'skyblue',
  'teal',
  'tomato',
  'thistle',
  'skyblue',
  'teal',
  'tomato',
  'thistle',
  'skyblue',
  'teal',
];

const App = ({navigation}) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomColor: COLOR.PRIMARY,
          height: 105,
        }}>
        <SwiperFlatList
          data={colors}
          renderItem={({item}) => (
            <View style={[styles.child]}>
              <TouchableOpacity
                style={styles.touchableOpacityStyle}
                activeOpacity={0.5}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={IMAGE.profilePic}
                  style={styles.floatingButtonStyle}></Image>
              </TouchableOpacity>
              <View style={{alignItems: 'center', marginTop: 7}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: FONTS.MulishRegular,
                    color: COLOR.TEXTCOLOR,
                  }}>
                  Prajjwal
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{flex: 0.93}}>
        <SegmentedControlTab
          values={['General', 'Groups']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={10}
          tabsContainerStyle={styles.tabsContainer}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
        {customStyleIndex === 0 && (
          <View>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Chatscreen')}
                  style={styles.touchableOpacityStyle}>
                  <View style={styles.item}>
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
        )}
        {customStyleIndex === 1 && (
          <View>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Chatscreen')}
                  style={styles.touchableOpacityStyle}>
                  <View style={styles.item}>
                    <View style={{flex: 0.4}}>
                      <TouchableOpacity
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
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 35,
          borderRadius: 50,
          width: 56,
          height: 56,
          backgroundColor: COLOR.PRIMARY,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Userlist')}>
        <Image source={IMAGE.contact} style={{width: 66, height: 66}} />
        {/* <Entypo
          name="add-to-list"
          size={30}
          color={COLOR.WHITE}
          style={{marginLeft: 5}}
        /> */}
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'black',
            }}>
            <View style={{height: 360}}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 50,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: 20,
                  }}>
                  Profile
                </Text>
              </View>
              <Image
                source={IMAGE.profilePic}
                resizeMode="stretch"
                style={{width: '100%', height: '86%'}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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

export default App;
