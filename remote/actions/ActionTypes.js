module.exports = [
  'CHANGE_CHANNEL',
  'WARNING',
  'CHANNEL_CREATED',
  'PAIRING_TIMEOUT',
  'REMOTE_CONNECTED',
  'REMOTE_PAIRED',
  'SLIDE_IDX_CHANGED_FROM_REMOTE',
  'SLIDE_IDX_CHANGED_FROM_PRESENTATION'
].reduce((acc, actionType) => {
  acc[actionType] = actionType;
  return acc;
}, {});
