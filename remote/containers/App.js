import React, { Component } from 'react-native';
import { connect, Provider } from 'react-redux/native';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppReducer from '../reducers/AppReducer';
import SlideDeckContainer from './SlideDeckContainer';
import StartContainer from './StartContainer';
import PairingContainer from './PairingContainer';
import { startTimer } from '../actions/TimerActions';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(AppReducer);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startTimer }, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);

    props.startTimer();
  }

  render() {
    if (this.props.pairedState.isPaired) {
      return <SlideDeckContainer />;
    }
    if (this.props.pairedState.isConnected) {
      return <PairingContainer />;
    }

    return <StartContainer />;
  }
};
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () => <App /> }
      </Provider>
    );
  }
}
