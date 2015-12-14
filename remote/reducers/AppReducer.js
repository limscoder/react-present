import { NEXT_SLIDE, PREV_SLIDE } from '../actions/ActionTypes';

const initialState = {
  currentSlide: -1,
  totalSlides: 10
};

function nextSlide(state) {
  let newSlide = state.currentSlide + 1;
  if (newSlide >= state.totalSlides) {
    newSlide = 0;
  }

  return {
    ...state,
    currentSlide: newSlide
  };
}

function prevSlide(state) {
  let newSlide = state.currentSlide - 1;
  if (newSlide < 0) {
    newSlide = state.totalSlides - 1;
  }

  return {
    ...state,
    currentSlide: newSlide
  };
}

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case NEXT_SLIDE:
      return nextSlide(state);

    case PREV_SLIDE:
      return prevSlide(state);

    default:
      return state;
  }
};
