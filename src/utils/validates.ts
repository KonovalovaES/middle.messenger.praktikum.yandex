import Block from '../core/Block/Block';

export const loginValidate = (str: string, Error: Block) => {
  if (str.length === 0) {
    Error.setProps({ text: 'Введите логин' });
  }

  if (str.length < 3) {
    Error.setProps({ text: 'Логин не может содержать меньше 3 символов' });

    return false;
  }

  if (!(/^\S*$/).test(str)) {
    Error.setProps({ text: 'Логин не может содержать пробелы' });

    return false;
  }

  if (!(/^[^\u0410-\u044F\u0401\u0451]+$/).test(str)) {
    Error.setProps({ text: 'Логин не может содержать буквы кириллицы' });

    return false;
  }

  if (!(/^[a-zA-Z0-9\-_]*$/).test(str)) {
    Error.setProps({ text: 'Логин не может содержать спецсимволы, кроме "-" и "_"' });

    return false;
  }

  if (!(/^(?![0-9]+$)[a-zA-Z0-9\-_]*$/).test(str)) {
    Error.setProps({ text: 'Логин не может состоять только из цифр' });

    return false;
  }

  if (str.length > 20) {
    Error.setProps({ text: 'Логин не может содержать больше 20 символов' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};

export const passwordValidate = (str: string, Error: Block) => {
  if (str.length === 0) {
    Error.setProps({ text: 'Введите пароль' });
  }

  if (str.length < 8) {
    Error.setProps({ text: 'Пароль не может содержать меньше 8 символов' });

    return false;
  }

  if (!(/[A-Z]/).test(str)) {
    Error.setProps({ text: 'Пароль должен содержать хотя бы одну заглавную букву' });

    return false;
  }

  if (!(/\d/).test(str)) {
    Error.setProps({ text: 'Пароль должен содержать хотя бы одну цифру' });

    return false;
  }

  if (str.length > 40) {
    Error.setProps({ text: 'Пароль не может содержать больше 40 символов' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};

export const passwordRepeatValidate = (passwords: [string, string], Error: Block) => {
  const [originalPass, repeatPass] = passwords;

  if (originalPass && repeatPass && originalPass !== repeatPass) {
    Error.setProps({ text: 'Пароли должны совпадать' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};

export const nameValidate = (str: string, Error: Block) => {
  if (!/^[\p{Lu}A-ZА-ЯЁ][\p{L}A-Za-z]*$/u.test(str)) {
    Error.setProps({ text: 'Первая буква должна быть заглавной' });

    return false;
  }

  if (!(/^[^\d]*$/).test(str)) {
    Error.setProps({ text: 'Наличие цифр недопустимо' });

    return false;

    return true;
  }

  if (!(/^\S*$/).test(str)) {
    Error.setProps({ text: 'Наличие пробелов недопустимо' });

    return false;
  }

  if (!/^[a-zA-Zа-яА-Я0-9-]*$/.test(str)) {
    Error.setProps({ text: 'Наличие спецсимволов, кроме "-" недопустимо' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};

export const emailValidate = (str: string, Error: Block) => {
  if (!/^[^\u0410-\u044F\u0401\u0451]+$/.test(str)) {
    Error.setProps({ text: 'Email не может содержать буквы кириллицы' });

    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str)) {
    Error.setProps({ text: 'Email должен содержать логин, символ "@", а затем домен через точку' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};

export const phoneValidate = (str: string, Error: Block) => {
  if (!/^(?:\+?[78]|8)\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(str)) {
    Error.setProps({ text: 'Номер телефона может содержать от 10 до 15 цифр и допускает наличие символа "+" в начале' });

    return false;
  }

  Error.setProps({ text: '' });

  return true;
};
