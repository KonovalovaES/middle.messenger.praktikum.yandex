import {
  loginValidate,
  passwordValidate,
} from '../utils/validates';

import type { InputField } from './types/types';

const login: InputField[] = [
  {
    label: 'Логин',
    type: 'text',
    name: 'login',
    validate: loginValidate,
    ref: 'login',
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    validate: passwordValidate,
    ref: 'password',
  },
];

export default login;
