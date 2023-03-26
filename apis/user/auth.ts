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

const emailDuplicate = (email: string) => {
  return customAxios.post('/auth/join/email', {
    email: email,
  });
}

const nickDuplicate = (nick: string) => {
  return customAxios.post('/auth/join/nick', {
    nick: nick,
  });
}

const isLoggedIn = () => {
  return customAxios.get('/auth/is-login');
};

const isNotLoggedIn = () => {
  return customAxios.get('/auth/is-not-login');
};

const logout = () => {
  return customAxios.get('/auth/logout');
};

const passwordChange = (password: string, newPassword: string) => {
  return customAxios.post('/auth/password', {
    password: password,
    newPassword: newPassword
  });
};

const findPassword = (email: string) => {
  return customAxios.post('/auth/find/password', {
    email: email,
  });
}

export {login, join, logout, isLoggedIn, isNotLoggedIn, passwordChange, findPassword, emailDuplicate, nickDuplicate}