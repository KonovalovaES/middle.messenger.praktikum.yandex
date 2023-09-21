import Block from '../../core/Block';
import template from './template';
import { customHasOwnProperty } from '../../utils/helpers';

import type ISignin from './types/types';

export default class Signin extends Block<ISignin.Props, ISignin.Refs> {
  constructor(props: ISignin.Props) {
    super(props);

    if (customHasOwnProperty(props, 'onSignin')) {
      this.props.onSignin = props.onSignin?.bind(this);
    }
  }

  render(): string {
    return template;
  }
}
