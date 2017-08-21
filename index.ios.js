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
  View
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

AppRegistry.registerComponent('AppTakbando', () => AppTakbando);
