import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
    apiKey: "AIzaSyC6OgPh0PNw2yJv7svTmnpnsFDpp-ShkNM",
    authDomain: "one-time-password-5eda3.firebaseapp.com",
    databaseURL: "https://one-time-password-5eda3.firebaseio.com",
    projectId: "one-time-password-5eda3",
    storageBucket: "one-time-password-5eda3.appspot.com",
    messagingSenderId: "103947895376"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
