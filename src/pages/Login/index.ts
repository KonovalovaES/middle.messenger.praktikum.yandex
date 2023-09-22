import Block from '../../core/Block';
import template from './template';
import { customHasOwnProperty } from '../../utils/helpers';

import type ILogin from './types/types';

import './style.scss';

export default class Login extends Block<ILogin.Props, ILogin.Refs> {
  constructor(props: ILogin.Props) {
    super(props);

    if (customHasOwnProperty(props, 'onLogin')) {
      this.props.onLogin = props.onLogin?.bind(this);
    }
  }
  render(): string {
    return(template);
  }
}
