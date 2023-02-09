import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import GLOBALS from '../../../assets/index';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import SearchBar from 'react-native-dynamic-search-bar';
import Icon from 'react-native-vector-icons/Ionicons';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const usersData = [];
        querySnapshot.forEach(documentSnapshot => {
          usersData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(usersData);
        setFilteredUsers(users);
      });

    return () => subscriber();
  }, []);
  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm]);

  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.08,
            backgroundColor: COLOR.PRIMARY,
            justifyContent: 'center',
            paddingHorizontal: 6,
          }}>
          <SearchBar
            placeholder="Search here"
            backgroundColor="white"
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={{width: '100%'}}
          />
        </View>

        <View style={{flex: 0.9, marginTop: 10}}>
          <FlatList
            data={searchTerm === '' ? users : filteredUsers}
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
                      activeOpacity={0.5}
                      onPress={() => setModalVisible(true)}>
                      {item.profilepic ? (
                        <View>
                          <Image
                            style={styles.floatingButtonStyle}
                            source={item.profilepic}
                          />
                        </View>
                      ) : (
                        <View style={styles.profileicon}>
                          <Icon
                            name="person-add-outline"
                            size={40}
                            style={{
                              alignSelf: 'center',
                              marginRight: 3,
                              marginTop: 2,
                            }}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  </View>

                  <View style={{flex: 1.2, flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                      <Text style={styles.title}>{item.username}</Text>
                      <Text style={styles.phonenumber}>
                        {item.phone_number}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
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
    fontFamily: FONTS.MulishBold,
    color: COLOR.TEXTCOLOR,
  },
  phonenumber: {
    fontSize: 20,
    fontFamily: FONTS.MulishRegular,
    color: COLOR.SHADOW,
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
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
  },
  profilePic: {
    height: 180,
    width: 180,
    marginBottom: 30,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
  },
  profileicon: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: COLOR.LIGHTGREY,
  },
});
