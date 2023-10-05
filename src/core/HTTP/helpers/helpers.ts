const queryStringify = <Request>(data?: Request | string) => {
  if (!data || typeof data === 'string') {
    return data;
  }

  return Object.entries(data)
    .reduce((acc, [key, value]) => `${acc}${acc.length === 1 ? '' : '&'}${key}=${value}`, '?');
};

export default queryStringify;
