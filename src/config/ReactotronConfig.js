import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const host = { host: '192.168.15.4' }; // YOUR_APP_ADRESS

  const tron = Reactotron.configure(host)
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
