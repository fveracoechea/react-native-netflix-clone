import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slide from './components/Slide';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  updateMenu(isOpen) {
    this.setState({isOpen});
  }
  toggle() {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen});
  }
  render() {
    const { isOpen } = this.state;
    return (
      <View style={style.lists}>
        <SideMenu
          menu={ <Menu /> }
          onChange={(isOpen) => this.updateMenu(isOpen) }
          isOpen={isOpen}
        >
          <Header toggle={this.toggle} />
          <ScrollView>
            <Slide />
            <List />
          </ScrollView>
        </SideMenu>
      </View>
    );
  }
}
const style = StyleSheet.create({
  lists: {
    flex: 1,
    backgroundColor: '#181818',
  }
});
export default App;
