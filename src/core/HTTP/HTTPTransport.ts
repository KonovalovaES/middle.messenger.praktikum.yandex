import METHODS from './types/consts';
import queryStringify from './helpers/helpers';

import type { Options, RequestHandlerType } from './types/types';

export default class HTTPTransport {
  get: RequestHandlerType = (url, options) => {
    const stringifyData = queryStringify(options.data);

    return this.request(
      `${url}${stringifyData}`,
      {
        ...options,
        method: METHODS.GET,
        data: stringifyData,
      },
    );
  };

  put: RequestHandlerType = (url, options) => this.request(
    url,
    {
      ...options,
      method: METHODS.PUT,
    },
  );

  post: RequestHandlerType = (url, options) => this.request(
    url,
    {
      ...options,
      method: METHODS.POST,
    },
  );

  delete: RequestHandlerType = (url, options) => this.request(
    url,
    {
      ...options,
      method: METHODS.DELETE,
    },
  );

  request(url: string, options: Options, timeout = 5000) {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.timeout = timeout;

      if (headers && Object.keys(headers).length > 0) {
        Object.keys(headers).forEach((header) => xhr.setRequestHeader(header, headers[header]));
      }

      xhr.onload = () => resolve(xhr);

      xhr.onabort = () => reject(new Error('Запрос был отменен'));
      xhr.onerror = () => reject(new Error('Произошла ошибка во время запроса'));
      xhr.ontimeout = () => reject(new Error('Превышено время ожидания запроса'));

      xhr.send(method === METHODS.GET || !data ? void 0 : JSON.stringify(data));
    });
  }
}
