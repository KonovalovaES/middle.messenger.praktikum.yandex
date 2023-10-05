import METHODS from './types/consts';
import queryStringify from './helpers/helpers';

import type { RequestOptions, RequestHandlerType } from './types/types';

export default class HTTPTransport {
  private readonly _url: string;
  constructor(url: string) {
    this._url = `https://ya-praktikum.tech/api/v2/${url}`;
  }

  get: RequestHandlerType = (url, options) => {
    const stringifyData = queryStringify(options.data);

    return this.request(
      `${this._url}${url ? url : ''}${stringifyData || ''}`,
      {
        ...options,
        method: METHODS.GET,
        data: stringifyData,
      },
    );
  };

  put: RequestHandlerType = (url, options) => this.request(
    `${this._url}${url ? url : ''}`,
    {
      ...options,
      method: METHODS.PUT,
    },
  );

  post: RequestHandlerType = (url, options) => this.request(
    `${this._url}${url ? url : ''}`,
    {
      ...options,
      method: METHODS.POST,
    },
  );

  delete: RequestHandlerType = (url, options) => this.request(
    `${this._url}${url ? url : ''}`,
    {
      ...options,
      method: METHODS.DELETE,
    },
  );

  request<Request, Response>(
    url: string,
    options: RequestOptions<Request>,
    timeout = 10000,
  ): Promise<Response> {
    const { method, data, headers: _headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open(method, url);

      xhr.timeout = timeout;

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response.includes('"') ? JSON.parse(xhr.response) : xhr.response);
        }

        reject(xhr.response.includes('"') ? JSON.parse(xhr.response) : xhr.response);
      };

      xhr.onabort = () => reject(new Error('Запрос был отменен'));
      xhr.onerror = () => reject(new Error('Произошла ошибка во время запроса'));
      xhr.ontimeout = () => reject(new Error('Превышено время ожидания запроса'));

      if (data instanceof FormData) {
        xhr.send(data);
      } else {
        const headers: Record<string, string> = { 'content-type': 'application/json', ..._headers };

        Object.keys(headers).forEach((header) => xhr.setRequestHeader(header, headers[header]));
        xhr.send(method === METHODS.GET || !data ? void 0 : JSON.stringify(data));
      }
    });
  }
}
