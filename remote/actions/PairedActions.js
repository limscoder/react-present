import PubNub from 'pubnub';
import {
  CHANGE_CHANNEL,
  CHANNEL_CREATED,
  REMOTE_CONNECTED,
  PAIRING_PROGRESS,
  PAIRING_TIMEOUT,
  REMOTE_PAIRED,
  WARNING
} from './ActionTypes';

const channelValidator = new RegExp('\\d{4}');
let isPaired = false;

function connectionTimeout(timeoutIndex, channel, dispatch) {
  dispatch({
    type: PAIRING_PROGRESS,
    payload: timeoutIndex
  });

  setTimeout(() => {
    if (!isPaired) {
      if (timeoutIndex > 10) {
        dispatch({
          type: PAIRING_TIMEOUT,
          payload: channel
        });
      } else {
        connectionTimeout(timeoutIndex + 1, channel, dispatch);
      }
    }
  }, 1500);
}

function connect(channel, dispatch) {
  if (!channelValidator.test(channel)) {
    return {
      type: WARNING,
      payload: 'enter 4 digit pair code'
    };
  }

  const pubNub = PubNub({
      publish_key: 'pub-c-da0eeda9-dbe8-4613-94a0-7fe0baab2fea',
      subscribe_key: 'sub-c-c66be958-affe-11e5-a8f0-0619f8945a4f'
  });

  pubNub.subscribe({
    channel,
    message: (message) => {
      console.log('received message', message);

      if (message.type === REMOTE_PAIRED) {
        isPaired = true;
      }

      dispatch(message);
    }
  });

  const connection = {
    publish: (message) => {
      console.log('published message', message);
      pubNub.publish({ channel, message });
    }
  }
  connection.publish({
    type: REMOTE_CONNECTED,
    payload: true
  });

  connectionTimeout(1, channel, dispatch);

  return {
    type: CHANNEL_CREATED,
    payload: connection
  };
}

module.exports = {
  changeChannel: (text) => {
    return {
      type: CHANGE_CHANNEL,
      payload: text
    };
  },

  connectChannel: (channel) => {
    return dispatch => {
      dispatch(connect(channel, dispatch));
    }
  }
};
