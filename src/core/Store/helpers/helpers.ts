import type { Indexed, StringIndexed } from '../types/types';

// const trim = (str: string, chars = '') => {
//   if (!chars) {
//     return str.trim();
//   }
//
//   const regExp = new RegExp(`[${chars}]`, 'gmi');
//
//   return str.trim().replace(regExp, '');
// };

const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
  for (const prop in rhs) {
    if (!(Object.prototype.hasOwnProperty.call(rhs, prop))) {
      continue;
    }

    try {
      if (rhs[prop].constructor === Object) {
        lhs[prop] = merge(lhs[prop], rhs[prop]);
      } else if (rhs[prop].constructor === Array) {
        const res = [];

        for (let i = 0; i < rhs[prop].length; i++) {
          res.push(merge(lhs[prop][i], rhs[prop][i]));
        }

        lhs[prop] = res;
      } else {
        lhs[prop] = rhs[prop];
      }
    } catch (error) {
      lhs[prop] = rhs[prop];
    }
  }

  return lhs;
};

const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as never);

  return merge(object as Indexed, result);
};

const isIndexed = (value: unknown): value is Indexed => typeof value === 'object'
  && value !== null
  && value.constructor === Object
  && Object.prototype.toString.call(value) === '[object Object]';

const isArray = (value: unknown): value is [] => Array.isArray(value);

const isArrayOrObject = (value: unknown): value is [] | Indexed => (
  isIndexed(value) || isArray(value)
);

export const isDeepEqual = (lhs: Indexed, rhs: Indexed) => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isDeepEqual(value, rightValue)) {
        continue;
      }

      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
};

export const deepClone = (obj: Indexed) => {
  const result: Indexed = obj?.constructor === Array ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || (value?.constructor !== Object && value?.constructor !== Array)) {
      result[key] = value;
    } else {
      result[key] = deepClone(value);
    }
  }

  return result;
};

const queryStringify = (data: StringIndexed): string | never => {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    const value = data[key];
    const endLine = index < keys.length - 1 ? '&' : '';

    if (Array.isArray(value)) {
      const arrayValue = value.reduce<StringIndexed>(
        (result, arrData, index) => ({
          ...result,
          [`${key}[${index}]`]: arrData,
        }),
        {},
      );

      return `${result}${queryStringify(arrayValue)}${endLine}`;
    }

    if (typeof value === 'object') {
      const objValue = Object.keys(value || {}).reduce<StringIndexed>(
        (result, objKey) => ({
          ...result,
          [`${key}[${objKey}]`]: value[objKey],
        }),
        {},
      );

      return `${result}${queryStringify(objValue)}${endLine}`;
    }

    return `${result}${key}=${value}${endLine}`;
  }, '');
};

export default set;
