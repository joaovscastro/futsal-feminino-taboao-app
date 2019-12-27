import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"
Icon.loadFont()
import LottieView from 'lottie-react-native';
import Bola from './bola.json'

// import { Container } from './styles';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Olar wewe ew</Text>
      <LottieView
      autoPlay
      style={{ width: 200, height: 200}}
        source={Bola}
      />
      <Icon name="add" size={30} />
      <View>
        <Text>sufgsufgs</Text>
        <Text>sufgsdsasdasdasddufgsdafdadsffsfsfssdfsdf</Text>
      </View>
    </SafeAreaView>
  );
}
