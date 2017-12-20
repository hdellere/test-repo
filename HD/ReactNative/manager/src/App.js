import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBpKDgQB7ykcrA_piyeLvsGawElCwmIa4k',
    authDomain: 'manager-2a19e.firebaseapp.com',
    databaseURL: 'https://manager-2a19e.firebaseio.com',
    projectId: 'manager-2a19e',
    storageBucket: '',
    messagingSenderId: '35869496294'
    };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
      </Provider>
    );
  }
}
