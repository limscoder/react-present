import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import Pairing from '../components/Pairing';

function mapStateToProps(state) {
  return {
    progress: (state.pairedState.pairingProgress / 10)
  }
}

module.exports = connect(mapStateToProps)(Pairing);
