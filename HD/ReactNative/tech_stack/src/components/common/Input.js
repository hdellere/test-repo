import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry }) => (
  <View style={styles.containerStyle} >
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      selectTextOnFocus
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
    />
  </View>
);

export { Input };

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
