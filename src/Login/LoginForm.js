import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection } from '../common/Card';
import { Button,Input } from '../common/Elements';
import firebase from 'firebase';
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };
  onLogin() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response)=>{
      // eslint-disable-next-line
      console.log(response);
    });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input placeHolder={'abc@gmail.com'} value={this.state.email} label={'Email'} onChangeText={(email)=> {this.setState({email});}}/>
        </CardSection>
        <CardSection >
          <Input placeHolder={'Password'} value={this.state.password} label={'Password'}
                 onChangeText={(password)=>{this.setState({password})}} secureTextEntry>

          </Input>
        </CardSection>
        <CardSection>
          <Button onPress={this.onLogin.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
