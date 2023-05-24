import { combineReducers } from 'redux';
import jsonReducer from './jsontest/reducer';

const rootReducer = combineReducers({
  json: jsonReducer,
});

export default rootReducer;
