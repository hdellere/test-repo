//Index.android.js - place code in here for android!!

//Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component
const App = () => {
  return (
    <Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
    </Text>
  );
};

//Render it to the device
AppRegistry.registerComponent('album', () => App);
