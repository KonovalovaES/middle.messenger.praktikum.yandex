import { SuccessResponse, UserInfoResponse } from '../../types/types';

namespace IUsersAPI {
  interface ChangeProfileRequest {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
  }

  interface ChangeAvatarRequest {
    file: FormData;
  }

  interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
  }

  interface GetUserRequest {
    id: number;
  }

  interface SearchUserRequest {
    login: string;
  }

  type Data = ChangeProfileRequest | ChangeAvatarRequest | ChangePasswordRequest | GetUserRequest | SearchUserRequest;
}

export default IUsersAPI;
