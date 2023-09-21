import type METHODS from './consts';

type MethodsType = typeof METHODS[keyof typeof METHODS];

type RequestHandlerType = (url: string, options: Options) => Promise<unknown>;

export interface Options {
  method: MethodsType;
  data?: Record<string, unknown> | string;
  headers?: Record<string, string>;
}
