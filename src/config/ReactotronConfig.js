import Reactotron, { overlay } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(overlay())
    .connect();

  console.tron = tron;

  tron.clear();
}
