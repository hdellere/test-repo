import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCEox2odJFsTSIt-8VcsgEL1xLnTmgWsaQ',
    authDomain: 'auth-e6dcc.firebaseapp.com',
    databaseURL: 'https://auth-e6dcc.firebaseio.com',
    projectId: 'auth-e6dcc',
    storageBucket: 'auth-e6dcc.appspot.com',
    messagingSenderId: '674857075821'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication App' />
        {this.renderContent()}
      </View>
    );
  }
}
