import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

// components
import App from './src/app';
import Search from './src/components/Search';


export default () => (
  <NativeRouter>
  <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/search" component={Search}/>
    </Switch>
  </NativeRouter>
);
