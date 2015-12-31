import React, { Component } from 'react-native';
import { connect, Provider } from 'react-redux/native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppReducer from '../reducers/AppReducer';
import SlideDeckContainer from './SlideDeckContainer';
import StartContainer from './StartContainer';
import Pairing from '../components/Pairing';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(AppReducer);

function mapStateToProps(state) {
  return state;
}

class App extends Component {
  render() {
    if (this.props.pairedState.isPaired) {
      return <SlideDeckContainer />;
    }
    if (this.props.pairedState.isConnected) {
      return <Pairing />;
    }

    return <StartContainer />;
  }
};
App = connect(mapStateToProps)(App);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () => <App /> }
      </Provider>
    );
  }
}
