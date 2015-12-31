import {
  CHANGE_CHANNEL,
  CHANNEL_CREATED,
  PAIRING_TIMEOUT,
  REMOTE_PAIRED,
  WARNING
} from '../actions/ActionTypes';

const initialState = {
  channel: null,
  warning: null,
  isPaired: false,
  isConnected: false,
  connection: null
};

function changeChannel(state, action) {
  return {
    ...state,
    channel: action.payload
  };
}

function warning(state, action) {
  return {
    ...state,
    warning: action.payload
  };
}

function pair(state, action) {
  return {
    ...state,
    isPaired: true
  };
}

function connect(state, action) {
  return {
    ...state,
    warning: null,
    isConnected: true,
    connection: action.payload
  };
}

function timeout(state, action) {
  if (state.channel === action.payload && !state.isPaired) {
    return {
      ...state,
      warning: 'connection timed out',
      isConnected: false,
      connection: null
    };
  }

  return state;
}

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_CHANNEL:
      return changeChannel(state, action);

    case WARNING:
      return warning(state, action);

    case CHANNEL_CREATED:
      return connect(state, action);

    case PAIRING_TIMEOUT:
      return timeout(state, action);

    case REMOTE_PAIRED:
      return pair(state, action);

    default:
      return state;
  }
};
