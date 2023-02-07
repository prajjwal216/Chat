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
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Prajjwal Gupta',
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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Prajjwal Gupta',
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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'src/images/ic_chats_contacts.png',
    name: 'Prajjwal Gupta',
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
                activeOpacity={0.5}
                onPress={() => Alert.alert('Alert Title')}
                style={styles.touchableOpacityStyle}>
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
                      activeOpacity={0.5}
                      onPress={() => Alert.alert('Profile photo in progress')}
                      style={styles.touchableOpacityStyle}>
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
                      onPress={() => Alert.alert('Profile photo in progress')}
                      style={styles.touchableOpacityStyle}>
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
