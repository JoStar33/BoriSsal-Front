import { customAxios } from "../axios/customAxios";

const login = (email: string, password: string) => {
  return customAxios.post('/auth/login', {
    email: email,
    password: password
  });
};

const join = (email: string, nick: string, password: string) => {
  return customAxios.post('/auth/join', {
    email: email,
    nick: nick,
    password: password
  });
};

const isLoggedIn = () => {
  return customAxios.get('/auth/is-login');
}

const logout = () => {
  return customAxios.get('/auth/logout');
};

export {login, join, logout, isLoggedIn}