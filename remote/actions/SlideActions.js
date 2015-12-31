import { SLIDE_IDX_CHANGED_FROM_REMOTE } from './ActionTypes';

module.exports = {
  nextSlide(slideState, pairedState) {
    let newSlide = slideState.currentSlide + 1;
    if (newSlide >= slideState.totalSlides) {
      newSlide = 0;
    }

    const action = {
      type: SLIDE_IDX_CHANGED_FROM_REMOTE,
      payload: newSlide
    };

    pairedState.connection.publish(action);
    return action;
  },

  prevSlide() {}
};
