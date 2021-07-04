import Cookies from '@utils/cookies';
import { IUserState } from '@interfaces/state/user';
import { 
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../types/user";
import AuthUtils from "@utils/auth";

let initialState: IUserState = {
  user: null,
  token: null,
  userIsLoggedIn: false
}

if (AuthUtils.checkUserLogin()) {
  initialState.user = JSON.parse(Cookies.get('auth_user') || "");
  initialState.token = String(Cookies.get('auth_token')); 
  initialState.userIsLoggedIn = true;
} else {
  AuthUtils.clearAuthDataFromClient();
}

export const userReducer = (state = initialState, action: any ) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userIsLoggedIn: true
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        userIsLoggedIn: false
      }
    default:
      return state;
  }
}