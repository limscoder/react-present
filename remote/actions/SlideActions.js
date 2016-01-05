import {
  SLIDE_IDX_CHANGED_FROM_REMOTE,
  SLIDE_DECK_RESET,
  SELECTED_SLIDE_CHANGED
} from './ActionTypes';

function changeSlide(pairedState, slideIdx) {
  const action = {
    type: SLIDE_IDX_CHANGED_FROM_REMOTE,
    payload: slideIdx
  };

  pairedState.connection.publish(action);
  return action;
};

module.exports = {
  changeSlide,

  nextSlide(slideState, pairedState) {
    let newSlide = slideState.currentSlide + 1;
    if (newSlide >= slideState.totalSlides) {
      newSlide = 0;
    }

    return changeSlide(pairedState, newSlide);
  },

  prevSlide() {},

  reset(pairedState) {
    changeSlide(pairedState, 0);

    return {
      type: SLIDE_DECK_RESET,
      payload: 0
    };
  },

  selectSlide(slideIdx) {
    return {
      type: SELECTED_SLIDE_CHANGED,
      payload: slideIdx
    };
  }
};
