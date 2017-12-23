import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';

export default class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
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
