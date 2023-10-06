export type SuccessResponse = 'Ok';
export type BadRequestResponse = { reason?: string }
export type UnauthorizedResponse = 'Unauthorized';
export type UnexpectedErrorResponse = 'Unexpected error';

export type UserInfoResponse = {
  id: number,
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};


