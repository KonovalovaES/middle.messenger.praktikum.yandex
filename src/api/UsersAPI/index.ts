import HTTP from '../../core/HTTP/HTTPTransport';

import type IUsersAPI from './types/types';
import type { SuccessResponse, UserInfoResponse } from '../types/types';

const usersAPIInstance = new HTTP('user');

class UsersAPI {
  changeProfile(data: IUsersAPI.ChangeProfileRequest): Promise<UserInfoResponse> {
    return usersAPIInstance.put('/profile', { data });
  }

  changeAvatar(data: FormData): Promise<UserInfoResponse> {
    return usersAPIInstance.put('/profile/avatar', { data });
  }

  changePassword(data: IUsersAPI.ChangePasswordRequest): Promise<SuccessResponse> {
    return usersAPIInstance.put('/password', { data });
  }

  get(id: number): Promise<UserInfoResponse> {
    return usersAPIInstance.get('/', { data: { id } as IUsersAPI.GetUserRequest });
  }

  search(login: string): Promise<UserInfoResponse[]> {
    return usersAPIInstance.post('/search', { data: { login } });
  }
}

export default new UsersAPI();
