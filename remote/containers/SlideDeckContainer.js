import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import SlideDeck from '../components/SlideDeck';
import { nextSlide, prevSlide } from '../actions/SlideActions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onNext: nextSlide,
    onPrev: prevSlide
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps.slideState,
    ...dispatchProps,
    ...ownProps,
    onNext: dispatchProps.onNext.bind(null, stateProps.slideState, stateProps.pairedState)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SlideDeck);
