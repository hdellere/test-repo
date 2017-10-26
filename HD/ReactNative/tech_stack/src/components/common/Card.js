import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

export { Card };

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2, //Use Shadow components for iOS device
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
});
