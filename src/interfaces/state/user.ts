import { IUserEntity } from '@interfaces/services/auth';

export interface IUserState {
  token: string | null;
  user: IUserEntity | null;
  userIsLoggedIn: boolean;
}