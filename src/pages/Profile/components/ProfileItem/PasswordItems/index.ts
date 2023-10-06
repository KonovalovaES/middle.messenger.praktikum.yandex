import Block from '../../../../../core/Block/Block';
import template from './template';
import { passwordRepeatValidate, passwordValidate } from '../../../../../utils/validates';

import type IPasswordItems from './types/types';

export default class PasswordItems extends Block<IPasswordItems.Props, IPasswordItems.Refs> {
  constructor(props: IPasswordItems.Props) {
    super(props);

    this.props.passwordValidate = passwordValidate;
    this.props.repeatPasswordValidate = passwordRepeatValidate;
    this.props.onPasswordBlur = () => this._isValidPassword && this._isPasswordsSame;
    this.props.onRepeatPasswordBlur = () => this._isPasswordsSame;
  }

  private get _password() {
    return this.refs.new_password.rawValue;
  }

  private get _repeatPassword() {
    return this.refs.repeat_new_password.rawValue;
  }

  get value() {
    if (this._isValidPassword && this._isPasswordsSame) {
      return this._password;
    }

    console.error('Валидация не пройдена');
  }

  get _isValidPassword() {
    return this.props.passwordValidate(this._password, this.refs.new_password.refs.errorText);
  }

  get _isPasswordsSame() {
    return this.props.repeatPasswordValidate(
      [this._password, this._repeatPassword],
      this.refs.repeat_new_password.refs.errorText,
    );
  }

  render() {
    return template;
  }
}
