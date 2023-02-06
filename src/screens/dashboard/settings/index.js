import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

export default Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer_style}>
        <Icon name="settings-sharp" size={25} color={'black'}></Icon>
        <Text style={styles.topheading}> Settings </Text>
      </View>

      <View style={styles.body_container}>
        <TouchableOpacity
          style={styles.touchableheading}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Account')}>
          <Text style={styles.heading}>Account</Text>
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
