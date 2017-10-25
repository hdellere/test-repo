/* @flow */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  Card,
  CardSection,
  Button
} from './common';

export default class LoginForm extends Component {
  render() {
    return (
      <Card>

        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>

        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>

        <CardSection>
          <Button>
            Log In!
          </Button>
        </CardSection>

      </Card>
    );
  }
}
