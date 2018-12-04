import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/common/partials/header';
import LoginForm from './src/Login/LoginForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// eslint-disable-next-line
export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDgpONsf_H8lPp391nXxwLLImSEWdkJkFE',
      authDomain: 'auth-cdfea.firebaseapp.com',
      databaseURL: 'https://auth-cdfea.fiwerebaseio.com',
      projectId: 'auth-cdfea',
      storageBucket: 'auth-cdfea.appspot.com',
      messagingSenderId: '193604740695',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="LoginForm" />
        <LoginForm />
      </View>
    );
  }
}
