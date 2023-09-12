import axios from 'axios';

const API_KEY = '9c7c7d46b918ae57eb105853aba2f0ba';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function trendingMovie() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function searchMovie(value) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`
  );
  return response.data;
}

export async function movieDetails(id) {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function movieDetailsCast(id) {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function movieDetailsReviews(id) {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
