import {
  REMOTE_PAIRED,
  TIMER_TICK,
  SLIDE_IDX_CHANGED_FROM_PRESENTATION,
  SLIDE_DECK_RESET,
  SELECTED_SLIDE_CHANGED
} from '../actions/ActionTypes';

const initialState = {
  currentSlide: 0,
  totalSlides: 10,
  selectedSlide: 0,
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
    ...action.payload,
    selectedSlide: action.payload.currentSlide
  };
}

function timerTick(state, action) {
  return {
    ...state,
    elapsedTime: state.elapsedTime + action.payload
  };
}

function reset(state, action) {
  return {
    ...state,
    currentSlide: 0,
    elapsedTime: 0
  }
}

function selectSlide(state, action) {
  return {
    ...state,
    selectedSlide: action.payload
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

    case SLIDE_DECK_RESET:
      return reset(state, action);

    case SELECTED_SLIDE_CHANGED:
      return selectSlide(state, action);

    default:
      return state;
  }
};
