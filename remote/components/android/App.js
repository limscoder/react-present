import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import SlideDeck from './SlideDeck';
import { nextSlide, prevSlide } from '../../actions/SlideActions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onNext: nextSlide,
    onPrev: prevSlide
  }, dispatch);
}

class App extends Component {
  render() {
    return <SlideDeck { ...this.props } />;
  }
};
module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
