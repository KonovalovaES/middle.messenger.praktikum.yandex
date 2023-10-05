import type { SuccessResponse, UserInfoResponse } from '../../types/types';

namespace IAuthAPI {
  interface SignupRequest {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
  }

  interface SigninRequest {
    login: string;
    password: string;
  }

  type SignupResponse = { id: string };

  type SigninResponse = SuccessResponse;

  type GetUserResponse = UserInfoResponse;

  type Data = SignupRequest | SigninRequest;
}

export default IAuthAPI;
