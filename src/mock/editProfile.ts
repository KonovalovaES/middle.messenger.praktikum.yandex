import type { InputField } from './types/types';
import {
  loginValidate,
  nameValidate,
  emailValidate,
  phoneValidate,
} from '../utils/validates';
import { userProfileInfo as user } from './users';

const editProfile: InputField[] = [
  {
    label: 'Почта',
    type: 'email',
    name: 'email',
    validate: emailValidate,
    ref: 'email',
    value: user.email,
  },
  {
    label: 'Логин',
    type: 'text',
    name: 'login',
    validate: loginValidate,
    ref: 'login',
    value: user.login,
  },
  {
    label: 'Имя',
    type: 'text',
    name: 'first_name',
    validate: nameValidate,
    ref: 'firstName',
    value: user.first_name,
  },
  {
    label: 'Фамилия',
    type: 'text',
    name: 'second_name',
    validate: nameValidate,
    ref: 'secondName',
    value: user.second_name,
  },
  {
    label: 'Имя в чате',
    type: 'text',
    name: 'display_name',
    validate: nameValidate,
    ref: 'displayName',
    value: user.display_name,
  },
  {
    label: 'Телефон',
    type: 'tel',
    name: 'phone',
    validate: phoneValidate,
    ref: 'phone',
    value: user.phone,
  },
];

export default editProfile;
