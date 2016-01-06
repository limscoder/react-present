import PubNub from 'pubnub';

export let connection;

function getChannel() {
  return [1, 1, 1, 1].map(() => {
   return Math.floor(Math.random() * 6) + 1;
 }).join('');
}

export function connect(messageCallback) {
  if (!connection) {
    const channel = getChannel();

    const pubNub = PubNub({
        publish_key: 'pub-c-da0eeda9-dbe8-4613-94a0-7fe0baab2fea',
        subscribe_key: 'sub-c-c66be958-affe-11e5-a8f0-0619f8945a4f'
    });

    pubNub.subscribe({
      channel,
      message: (message) => {
        console.log('received message', message);
        messageCallback(message);
      }
    });

    connection = {
      channel,
      publish: (message) => {
        console.log('published message', message);
        return pubNub.publish({ channel, message });
      }
    };

    connection.publish({
      type: 'BROWSER_CONNECTED',
      payload: channel
    });
  }
}
