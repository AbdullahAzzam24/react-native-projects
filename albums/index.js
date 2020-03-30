/* eslint-disable prettier/prettier */
// Import a library to help create a component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a componet
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
