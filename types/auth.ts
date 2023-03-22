export interface IJoin {
  email: string;
  nick: string;
  password: string;
};

export interface ILogin {
  email: string;
  password: string;
};

export interface IPasswordInfo {
  password: string;
  passwordCheck: string;
  newPassword: string;
  newPasswordCheck: string;
};

export interface IPostPasswordInfo {
  password: string;
  newPassword: string;
};
