import { convertExpiresIn } from '@utils/token';
import { IUserLoginResponse } from "@interfaces/services/auth";
import Cookies from '@utils/cookies'

class AuthUtilsService {
  public saveAuthDataToClient (data: IUserLoginResponse): void {
      Cookies.set('auth_token', data.token.token, {
        'max-age': convertExpiresIn(data.token.expiresIn)
      })
      Cookies.set('auth_user', JSON.stringify(data.user || {}), {
        'max-age': convertExpiresIn(data.token.expiresIn)
      });
  }

  public clearAuthDataFromClient (): void {
      Cookies.delete('auth_user');
      Cookies.delete('auth_token');
  }

  public checkUserLogin (): boolean {
    return Boolean(Cookies.get('auth_token') && Cookies.get('auth_user'));
  }
}

const AuthUtils = new AuthUtilsService();

export default AuthUtils;
