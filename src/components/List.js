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
      <ScrollView style={styles.container}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#eeeeee',
  },
  container: {
    flex: 1,
    backgroundColor: '#181818',
  }
});

export default List;
