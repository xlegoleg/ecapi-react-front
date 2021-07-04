import { IUserLoginPayload } from '@interfaces/services/auth';
import { IUserEntity } from '@interfaces/services/auth';
import { Dispatch } from 'redux';
import authService from '@services/auth';
import { appLoading } from '@actions/base'; 
import { 
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../types/user';
import AuthUtils from '@utils/auth';

const setUser = (user: IUserEntity) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user
  }
}

const removeUser = () => {
  return {
    type: USER_LOGOUT
  }
}

export const loginUser = (userData: IUserLoginPayload) => (dispatch: Dispatch) => {
  dispatch(appLoading(true));
  authService.login(userData).then((response) => {
    dispatch(setUser(response.user))
    AuthUtils.saveAuthDataToClient(response);
    dispatch(appLoading(false));
  }).catch(e => {
    console.error(e.toString());
    dispatch(appLoading(false));
  });
}