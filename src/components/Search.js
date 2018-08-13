import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList, ScrollView, Dimensions, Image,
} from 'react-native';
import {
  Link
} from 'react-router-native';
import data from '../data/list';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class Search extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      text: '',
      showClearIcon: false,
      data: []
    }
    this.renderItem = this.renderItem.bind(this);
    this.handlerOnPress = this.handlerOnPress.bind(this);
    this.handlerOnChange = this.handlerOnChange.bind(this);
  }

  handlerOnChange(text) {
    this.setState({ text });
    if(text) {
      const newData = data.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }); 
      this.setState({ data: newData });
    } else {
      this.setState({ data: [] });
    }
  }

  handlerOnPress() {
    this.setState({ text: '', data: [] });
  }

  renderItem({ item }) {
      return(
        <Image
          key={item.key}
          style={styles.image}
          source={{uri: item.image}}
        />
      );
  }

render() {
    const { text, data } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="search"
            color="grey"
            size={18}
            style={styles.searchIcon}
          />
          <TextInput
            value={text}
            onChangeText={this.handlerOnChange}
            style={styles.input}
            placeholder="Search"
            keyboardAppearance="dark"
            autoFocus
            placeholderTextColor="grey"
          />
          {
            (text)
            ? 
              <TouchableHighlight onPress={this.handlerOnPress} style={styles.clearIcon}>
                <Text>
                  <Icon
                    name="times-circle"
                    color="grey"
                    size={18}
                  />
                </Text>
              </TouchableHighlight>
            : null
          }
          <TouchableHighlight style={styles.cancelButton}>
            <View style={styles.containerButton}>
              <Link to="/">
                <Text style={styles.textButton}>Cancel</Text>
              </Link>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            numColumns={2}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: width - (width / 4),
    paddingLeft: 30,
    backgroundColor: '#323232',
    borderRadius: 3,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  header: {
    height: 60,
    backgroundColor: '#181818',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#3a3a3a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 5,
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 9,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  clearIcon: {
    position: 'absolute',
    top: 15,
    right: 110,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    marginRight: 5,
    width: width / 2,
    height: height / 3,
  }
});

export default Search;
