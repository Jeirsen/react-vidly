import http from "./httpService";
import { baseURL } from "../config.json";

export function register(user) {
  return http.post(`${baseURL}/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
