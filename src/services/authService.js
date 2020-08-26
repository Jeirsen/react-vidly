import http from "./httpService";
import jwtDecode from "jwt-decode";
import { baseURL } from "../config.json";

let tokenKey = "token";
http.setJWT(getJWTToken());

export function getJWTToken() {
  return localStorage.getItem("token");
}

export async function login(email, password) {
  const { data: jwt } = await http.post(`${baseURL}/auth`, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
