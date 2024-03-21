import { requests } from '../axios/customAxios';

const login = async (email: string, password: string) => {
  return await requests.post('/auth/login', {
    email: email,
    password: password,
  });
};

const join = async (email: string, nick: string, password: string) => {
  return await requests.post('/auth/join', {
    email: email,
    nick: nick,
    password: password,
  });
};

const emailDuplicate = async (email: string) => {
  return await requests.post('/auth/join/email', {
    email: email,
  });
};

const nickDuplicate = async (nick: string) => {
  return await requests.post('/auth/join/nick', {
    nick: nick,
  });
};

const isLoggedIn = async () => {
  return await requests.get('/auth/is-login');
};

const isNotLoggedIn = async () => {
  return await requests.get('/auth/is-not-login');
};

const logout = async () => {
  return await requests.get('/auth/logout');
};

const passwordChange = async (password: string, newPassword: string) => {
  return await requests.post('/auth/password', {
    password: password,
    newPassword: newPassword,
  });
};

const findPassword = async (email: string) => {
  return await requests.post('/auth/find/password', {
    email: email,
  });
};

export { login, join, logout, isLoggedIn, isNotLoggedIn, passwordChange, findPassword, emailDuplicate, nickDuplicate };
