import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, ScrollView
} from 'react-native';
import data from '../data/list';


class List extends Component {
  renderItem(item) {
    return(
      <Image 
        style={{
          width: 120,
          height: 180
        }}
        key={item.key}
        source={{uri: item.image}}
      />
    );
  }
  render() { 
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>My List</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 5}}/>}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
          />
        </View>
        <View>
          <Text style={styles.text}>Top Picks For You</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 5}}/>}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#eeeeee',
    fontSize: 20,
    marginLeft: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#181818',
  }
});

export default List;
