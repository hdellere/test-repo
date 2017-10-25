import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCEox2odJFsTSIt-8VcsgEL1xLnTmgWsaQ',
    authDomain: 'auth-e6dcc.firebaseapp.com',
    databaseURL: 'https://auth-e6dcc.firebaseio.com',
    projectId: 'auth-e6dcc',
    storageBucket: 'auth-e6dcc.appspot.com',
    messagingSenderId: '674857075821'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication App' />
        <LoginForm />
      </View>
    );
  }
}
