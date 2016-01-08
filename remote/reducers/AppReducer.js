import { combineReducers } from 'redux';
import SlideReducer from './SlideReducer';
import PairedReducer from './PairedReducer';

module.exports = combineReducers({
  slideState: SlideReducer,
  pairedState: PairedReducer
});
