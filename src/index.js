import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('a49f11eb-3470-43e0-98ff-149b71ea2ab8');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentDidMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  // Disparado automaticamente quando receber uma notificação e o app estiver aberto
  onReceived = data => {};

  // Quando clica em uma notificação quando o app ta fechado
  onOpened = notification => {};

  // Quando um usuario faz um registro no serviço de notificação
  onIds = id => {};

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
    );
  }
}

export default Index;
