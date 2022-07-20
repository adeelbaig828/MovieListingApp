import {ADD_MOVIE} from './MoviesAction';

const initialState = {
  currentLocation: null,
  Movies: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      let {movie} = action.payload;
      let index = state.Movies.findIndex(v => v.id === movie.id);
      if (index >= 0) {
        return {...state, Movies: state.Movies.filter(v => v.id !== movie.id)};
      } else {
        return {...state, Movies: state.Movies.concat(movie)};
      }
      return state;
    }
    default:
      return state;
  }
};

export default apiReducer;
