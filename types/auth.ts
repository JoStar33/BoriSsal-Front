export interface IJoin {
  email: string;
  nick: string;
  password: string;
};

export interface ILogin {
  email: string;
  password: string;
};

export interface IPostPasswordInfo {
  password: string;
  newPassword: string;
};


export interface IPasswordInfo extends IPostPasswordInfo {
  password: string;
  newPassword: string;
};