/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text style={styles.buttonText}>{props.children}</Text>
  </TouchableOpacity>
);

export { Button };

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});
