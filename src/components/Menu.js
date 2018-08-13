import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarImage}>
            <Image
              source={require('../assets/images/user.png')}
              style={styles.avatar}
            />
            <Text style={styles.text}>Francisco</Text>
          </View>
          <Icon
            name="exchange"
            color="white"
            size={25}
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Icon
                name="download"
                style={styles.inconWithText}
                color="white"
                size={28}
              />
              <Text style={styles.text}>My Downloads</Text>
            </View>
            <Icon
              style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={28}
            />
          </View>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <IonIcon
                name="md-checkmark"
                style={styles.inconWithText}
                color="white"
                size={28}
              />
              <Text style={styles.text}>My List</Text>
            </View>
            <Icon
              style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={28}
            />
          </View>
          <View style={[styles.items, styles.itemSelected]}>
              <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Available for Download</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Netflix originals</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>TV Shows</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Actions and Adventure</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Chuldren and Family</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Documentaries</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Dramas</Text>
          </View>
          <View style={styles.noSelectedItem}>
              <Text style={styles.text}>Independent Movies</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    paddingVertical: 20,
    paddingLeft: 20,
    marginTop: 5,
  },
  noSelectedItem: {
    paddingVertical: 20,
    paddingLeft: 25,
    marginTop: 5,
  },
  itemSelected: {
    borderLeftWidth: 5,
    borderColor: 'red',
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  text:{
    color: '#e3e3e3',
    fontSize: 15,
  },
  avatarImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.5,
    borderColor: 'black',
    borderBottomWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    width: width / 1.5,
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: 'black',
    borderBottomWidth: 2,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inconWithText: {
    paddingHorizontal: 20,

  },
  rightIcon: {
    paddingRight: 20,
  },
  menu: {
    flex: 1,  
    width,
    height,
    backgroundColor: '#3b3b3b',
  },
});
export default Menu;
