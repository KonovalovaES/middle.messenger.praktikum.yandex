import Block from '../../core/Block/Block';
import template from './template';
import connect from '../../core/Store/connect';
import router from '../../core/Router/Router';
import { PAGES } from '../../consts';
import {
  emailValidate,
  loginValidate,
  nameValidate,
  phoneValidate,
  passwordValidate,
} from '../../utils/validates';

import type ISignup from './types/types';
import type { IStore } from '../../core/Store/types/types';
import authController from '../../controllers/AuthController';

class Signup extends Block<ISignup.Props, ISignup.Refs> {
  constructor(props: ISignup.Props) {
    super(props);

    this.props.fields = [
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
        ref: 'first_name',
      },
      {
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        validate: nameValidate,
        ref: 'second_name',
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
      // {
      //   label: 'Пароль (повторно)',
      //   type: 'password',
      //   name: 'password_repeat',
      //   validate: passwordRepeatValidate,
      //   ref: 'passwordRepeat',
      // },
    ];
    this.props.onSignup = (event: Event) => {
      event.preventDefault();

      authController.signup(this.refs.signupForm.values).catch(console.error);
    };
    this.props.goToLogin = () => router.go(PAGES.signin);
  }

  render(): string {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  user: state.user,
  loading: state.loading,
});

export default connect(Signup, mapStateToProps);
