import {
  CHANGE_CHANNEL,
  CHANNEL_CREATED,
  CHANNEL_DISCONNECTED,
  PAIRING_PROGRESS,
  PAIRING_TIMEOUT,
  REMOTE_PAIRED,
  WARNING
} from '../actions/ActionTypes';

const initialState = {
  channel: null,
  warning: null,
  pairingProgress: 1,
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

function pairingProgress(state, action) {
  return {
    ...state,
    pairingProgress: action.payload
  };
}

function pair(state, action) {
  if (state.isConnected) {
    return {
      ...state,
      isPaired: true
    };
  }

  return state;
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
  return {
    ...state,
    warning: 'connection timed out',
    isConnected: false,
    connection: null
  };

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

    case CHANNEL_DISCONNECTED:
      return initialState;

    case PAIRING_TIMEOUT:
      return timeout(state, action);

    case PAIRING_PROGRESS:
      return pairingProgress(state, action);

    case REMOTE_PAIRED:
      return pair(state, action);

    default:
      return state;
  }
};
