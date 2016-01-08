import { TIMER_TICK} from './ActionTypes';

module.exports = {
  startTimer: () => {
    const interval = 1000;

    return dispatch => {
      setInterval(() => {
        dispatch({
          type: TIMER_TICK,
          payload: interval
        })
      }, interval);
    }
  }
};
