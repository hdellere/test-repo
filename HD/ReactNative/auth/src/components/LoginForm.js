import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner
} from './common';

export default class LoginForm extends Component {
  state = {
    email: 'example@gmail.com',
    password: '********',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    });
  }

  onLoginSuccess() {
    this.setState({
      loading: false,
      email: 'Go To Next Form',
      password: '',
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
