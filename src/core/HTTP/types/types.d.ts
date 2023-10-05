import type METHODS from './consts';
import type IAuthAPI from '../../../api/AuthAPI/types/types';
import type IUsersAPI from '../../../api/UsersAPI/types/types';

type MethodsType = typeof METHODS[keyof typeof METHODS];

type RequestHandlerType = <Request, Response>(url: string, options: IncomingOptions<Request>) => Promise<Response>;

export interface IncomingOptions<T> {
  data?: T;
  headers?: Record<string, string>;
}

export interface RequestOptions<T> extends IncomingOptions<T> {
  method: MethodsType;
}
