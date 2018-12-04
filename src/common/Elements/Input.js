import React from 'react';
import { TextInput, Text, View } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 2,
  },
  labelStyle: {
    paddingLeft: 20,
    flex: 1,
    fontSize: 20,
  },
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
};
const Input = ({ label, onChangeText, value, placeHolder, secureTextEntry }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}> {label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeHolder}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      style={styles.inputStyle}
    />
  </View>
);

module.exports = Input;
