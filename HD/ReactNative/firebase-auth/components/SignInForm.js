import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-5eda3.cloudfunctions.net'

export default class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSignIn = async () => {
    try {
      let { data } = await axios.post(
        `${ROOT_URL}/verify_one_time_password`,
        { phone: this.state.phone, code: this.state.code }
      );

      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={styles.form}>
          <FormLabel>Enter Verification Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button
          title="Sign In"
          onPress={this.handleSignIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  form: {
    marginBottom: 10,
  }
});
