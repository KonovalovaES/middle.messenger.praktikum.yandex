const queryStringify = (data?: Record<string, unknown> | string) => {
  if (!data || typeof data === 'string') {
    return data;
  }

  return Object.keys(data).reduce((acc, key) => `${acc}${acc.length === 1 ? '' : '&'}${key}=${String(data[key])}`, '?');
};

export default queryStringify;
