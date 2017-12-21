import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class Ball extends Component {
  render() {
    return (
      <View style={styles.ball}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    borderRadius: 30,
    borderWidth: 30,
    height: 60,
    width: 60,
    borderColor: 'black'
  },
});
