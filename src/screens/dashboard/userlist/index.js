import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import GLOBALS from '../../../assets/index';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import SearchBar from 'react-native-dynamic-search-bar';
import ImageLoad from 'react-native-image-placeholder';

const {FONTS, COLOR, IMAGE} = GLOBALS;

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
                      style={styles.touchableOpacityStyle}
                      activeOpacity={0.5}
                      onPress={() => setModalVisible(true)}>
                      <ImageLoad
                        source={item.profilepic}
                        style={styles.floatingButtonStyle}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{flex: 1.2, flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                      <Text style={styles.title}>{item.username}</Text>
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
