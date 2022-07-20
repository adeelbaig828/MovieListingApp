export const ADD_MOVIE = 'ADD_MOVIE';

export const SET_CURRENT_WATCH_LIST = movie => dispatch => {
  return new Promise((resolve, reject) => {
    try {
      dispatch({
        type: ADD_MOVIE,
        payload: {movie},
      });
      resolve(movie);
    } catch (error) {
      console.log('SET_CURRENT_WATCH_LIST err', error);
      reject(error);
    }
  });
};
