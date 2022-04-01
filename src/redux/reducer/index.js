import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
  app: AppReducer,
  home: HomeReducer,
});
