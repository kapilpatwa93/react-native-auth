import React from 'react';
import { View, Text } from 'react-native';

const style = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    bottomBorderWidth: 0,
    shadowColor: '#145',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};
const MainCard = props => (
  <View style={style.containerStyle}>
     {props.children}
  </View>
);

module.exports = MainCard;
