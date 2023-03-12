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

const passwordChange = (id: string, password: string, newPassword: string) => {
  return customAxios.post('/auth/password', {
    id: id,
    password: password,
    newPassword: newPassword
  });
}

export {login, join, logout, isLoggedIn, passwordChange}