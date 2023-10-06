import Block from '../../core/Block/Block';
import template from './template';
import { PAGES } from '../../consts';
import router from '../../core/Router/Router';
import connect from '../../core/Store/connect';
import { loginValidate, passwordValidate } from '../../utils/validates';

import type ILogin from './types/types';
import type { IStore } from '../../core/Store/types/types';

import './style.scss';
import authController from '../../controllers/AuthController';

class Login extends Block<ILogin.Props, ILogin.Refs> {
  constructor(props: ILogin.Props) {
    super(props);

    this.props.fields = [
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
    this.props.onLogin = (event: Event) => {
      event.preventDefault();

      authController.signin(this.refs.loginForm.values).catch(console.error);
    };
    this.props.goToSignup = () => router.go(PAGES.signup);
  }

  render(): string {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  user: state.user,
  loading: state.loading,
});

export default connect(Login, mapStateToProps);
