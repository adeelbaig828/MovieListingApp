import {combineReducers} from 'redux';
import apiReducer from './Movies/MoviesReducer';

const reducers = combineReducers({
  selectedMovies: apiReducer,
});
export default reducers;
