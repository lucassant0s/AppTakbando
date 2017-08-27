/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  UIManager
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Application from './src/App';
import rootReducer from './src/reducers';


export default class AppTakbando extends Component {
  constructor(props) {
    super(props);
  }

  store = createStore(rootReducer);

  render() {
    return (
      <Provider store={this.store}>
          <Application />
      </Provider>
    );
  }
}

UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('AppTakbando', () => AppTakbando);
