import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import SlideDeck from '../components/SlideDeck';
import { disconnectChannel } from '../actions/PairedActions';
import { nextSlide, prevSlide, reset, selectSlide, changeSlide } from '../actions/SlideActions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onNext: nextSlide,
    onPrev: prevSlide,
    onReset: reset,
    onRePair: disconnectChannel,
    onSelectSlide: selectSlide,
    onSlideEnd: changeSlide
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps.slideState,
    ...dispatchProps,
    ...ownProps,
    onNext: dispatchProps.onNext.bind(null, stateProps.slideState, stateProps.pairedState),
    onPrev: dispatchProps.onPrev.bind(null, stateProps.slideState, stateProps.pairedState),
    onReset: dispatchProps.onReset.bind(null, stateProps.pairedState),
    onSlideEnd: dispatchProps.onSlideEnd.bind(null, stateProps.pairedState)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SlideDeck);
