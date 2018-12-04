import React from 'react';
import { View } from 'react-native';

const style = {
  containerStyle: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
};

const CardSection = props => <View style={style.containerStyle}>{props.children}</View>;

module.exports = CardSection;
