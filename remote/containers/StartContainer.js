import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import { changeChannel, connectChannel } from '../actions/PairedActions';
import Start from '../components/Start';

function mapStateToProps(state) {
  return state.pairedState;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChannelChange: changeChannel,
    onStart: connectChannel
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Start);
