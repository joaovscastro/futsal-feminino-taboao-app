import React from 'react';
import { View } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont()

// import { Container } from './styles';

export default function Feed() {


  return (
    <View />
  );
}

Feed.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (<Icon name="ios-search" size={30} color={tintColor} />)
}
