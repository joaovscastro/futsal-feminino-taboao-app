import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';


import Routes from "./routes"

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
     <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
    </View>
    )
  }
}

export default App;
