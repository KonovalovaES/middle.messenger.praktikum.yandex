import type { InputField } from './types/types';
import {
  loginValidate,
  passwordValidate,
  passwordRepeatValidate,
  nameValidate,
  emailValidate,
  phoneValidate,
} from '../utils/validates';

const signin: InputField[] = [
  {
    label: 'Почта',
    type: 'email',
    name: 'email',
    validate: emailValidate,
    ref: 'email',
  },
  {
    label: 'Логин',
    type: 'text',
    name: 'login',
    validate: loginValidate,
    ref: 'login',
  },
  {
    label: 'Имя',
    type: 'text',
    name: 'first_name',
    validate: nameValidate,
    ref: 'firstName',
  },
  {
    label: 'Фамилия',
    type: 'text',
    name: 'second_name',
    validate: nameValidate,
    ref: 'secondName',
  },
  {
    label: 'Телефон',
    type: 'tel',
    name: 'phone',
    validate: phoneValidate,
    ref: 'phone',
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    validate: passwordValidate,
    ref: 'password',
  },
  {
    label: 'Пароль (повторно)',
    type: 'password',
    name: 'password_repeat',
    validate: passwordRepeatValidate,
    ref: 'passwordRepeat',
  },
];

export default signin;
