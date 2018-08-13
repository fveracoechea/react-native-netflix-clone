import React from 'react';
import {
  Text, View, StyleSheet, TouchableHighlight, Image,
} from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={props.toggle}>
      <Icon
        name="bars"
        color="white"
        size={25}
      />
    </TouchableHighlight>
    <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
    <Link to="search">
      <Icon
        name="search"
        color="white"
        size={25}
      />
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  logo: {
    height: 60,
    width: 120,
  }
});

export default Header;
