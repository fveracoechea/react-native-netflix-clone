import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';


const { width } = Dimensions.get('window');

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        require('../assets/images/1.jpg'),
        require('../assets/images/2.jpg'),
        require('../assets/images/3.jpg'),
      ],
    };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
      return (
          <View style={styles.itemView}>
            <Image source={item} style={styles.image}/>
          </View>
      );
  }s

  render() {
    const { entries } = this.state;
    return (
      <View style={styles.container}>
        <Carousel
          loop
          autoplay
          ref={(c) => { this.carousel = c; }}
          data={entries}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemView: {
    height: 240,
  },
  image: {
    width,
    height: 240,
  },
  container: {
    backgroundColor: '#181818'
  }
});
export default Slide;
