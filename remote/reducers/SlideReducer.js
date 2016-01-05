import {
  REMOTE_PAIRED,
  TIMER_TICK,
  SLIDE_IDX_CHANGED_FROM_PRESENTATION
} from '../actions/ActionTypes';

const initialState = {
  currentSlide: 0,
  totalSlides: 1,
  currentSlideHtml: 'current slide html',
  currentSlideNotes: 'no notes',
  elapsedTime: 0
};

function paired(state, action) {
  return {
    ...updateCurrentSlide(state, action),
    elapsedTime: 0
  };
}

function updateCurrentSlide(state, action) {
  return {
    ...state,
    ...action.payload
  };
}

function timerTick(state, action) {
  return {
    ...state,
    elapsedTime: state.elapsedTime + action.payload
  };
}

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case TIMER_TICK:
      return timerTick(state, action);

    case REMOTE_PAIRED:
      return paired(state, action);

    case SLIDE_IDX_CHANGED_FROM_PRESENTATION:
      return updateCurrentSlide(state, action);

    default:
      return state;
  }
};
