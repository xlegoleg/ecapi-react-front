enum UserRoles {
  'buyer',
  'admin'
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IUserEntity {
  _id: string;
  role: keyof typeof UserRoles;
  created: string;
  name: string;
  email: string;
  location?: string;
}