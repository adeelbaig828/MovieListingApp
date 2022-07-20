import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const key = 'd24ff0affc163fe180a853849e4c3599';
export const GetMoviesData = id => {
  console.log('id', id);
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/discover/movie?api_key=${key}&with_genres=${id}`,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log('GetMoviesData Error', error.response.data);
        reject(error.response.data);
      });
  });
};
