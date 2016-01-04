import { REMOTE_PAIRED, SLIDE_IDX_CHANGED_FROM_PRESENTATION } from '../actions/ActionTypes';

const initialState = {
  currentSlide: 0,
  totalSlides: 1,
  currentSlideHtml: 'current slide html'
};

function updateCurrentSlide(state, action) {
  return {
    ...state,
    ...action.payload
  };
}

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case REMOTE_PAIRED:
      return updateCurrentSlide(state, action);

    case SLIDE_IDX_CHANGED_FROM_PRESENTATION:
      return updateCurrentSlide(state, action);

    default:
      return state;
  }
};
