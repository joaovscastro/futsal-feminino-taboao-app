import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import App from './App';

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <App />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}

export default Index;
