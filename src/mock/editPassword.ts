import type { InputField } from './types/types';
import {
  passwordValidate,
  passwordRepeatValidate,
} from '../utils/validates';

const editPassword: InputField[] = [
  {
    label: 'Старый пароль',
    type: 'password',
    name: 'old_password',
    validate: passwordValidate,
    ref: 'password',
    placeholder: 'Старый пароль',
  },
  {
    label: 'Новый пароль',
    type: 'password',
    name: 'new_password',
    validate: passwordValidate,
    ref: 'newPassword',
    placeholder: 'Новый пароль',
  },
  {
    label: 'Новый пароль (повторно)',
    type: 'password',
    name: 'new_password_repeat',
    validate: passwordRepeatValidate,
    ref: 'newPasswordRepeat',
    placeholder: 'Новый пароль',
  },
];

export default editPassword;
