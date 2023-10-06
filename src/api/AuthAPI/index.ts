import HTTP from '../../core/HTTP/HTTPTransport';

import type IAuthAPI from './types/types';
import type { SuccessResponse } from '../types/types';

const authAPIInstance = new HTTP('auth');

class AuthAPI {
  signup(data: IAuthAPI.SignupRequest): Promise<IAuthAPI.SignupResponse> {
    return authAPIInstance
      .post<IAuthAPI.SignupRequest, IAuthAPI.SignupResponse>('/signup', { data });
  }

  signin(data: IAuthAPI.SigninRequest): Promise<IAuthAPI.SigninResponse> {
    return authAPIInstance.post('/signin', { data });
  }

  getUser(): Promise<IAuthAPI.GetUserResponse> {
    return authAPIInstance.get('/user', {});
  }

  logout(): Promise<SuccessResponse> {
    return authAPIInstance.post('/logout', {});
  }
}

export default new AuthAPI();
