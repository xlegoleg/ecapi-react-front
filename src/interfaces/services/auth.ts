enum UserRoles {
  'buyer',
  'admin'
}

export interface IUserLoginToken {
  token: string;
  expiresIn: string | number;
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  user: IUserEntity;
  token: IUserLoginToken;
}

export interface IUserEntity {
  _id: string;
  role: keyof typeof UserRoles;
  created: string;
  name: string;
  email: string;
  location?: string;
}