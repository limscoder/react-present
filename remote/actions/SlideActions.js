import { NEXT_SLIDE, PREV_SLIDE } from './ActionTypes';

module.exports = {
  nextSlide() {
    return {
      type: NEXT_SLIDE
    };
  },

  prevSlide() {
    return {
      type: PREV_SLIDE
    };
  }
};
