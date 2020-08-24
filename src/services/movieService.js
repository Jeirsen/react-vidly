import http from "./httpService";
import { baseURL } from "../config.json";

export function getMovies() {
  return http.get(`${baseURL}/movies`);
}

export function deleteMovie(movieId) {
  return http.delete(`${baseURL}/movies/${movieId}`);
}

export function getMovie(movieId) {
  return http.get(`${baseURL}/movies/${movieId}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${baseURL}/movies/${movie._id}`, body);
  }

  return http.post(`${baseURL}/movies`, movie);
}
