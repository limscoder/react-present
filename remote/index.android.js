import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux/native';
import { createStore } from 'redux';
import AppReducer from './reducers/AppReducer';
import App from './components/android/App';

const store = createStore(AppReducer);

class SmartApp extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () => <App /> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('remote', () => SmartApp);
