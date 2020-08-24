import http from "./httpService";
import { baseURL } from "../config.json";

export function getGenres() {
  return http.get(`${baseURL}/genres`);
}
