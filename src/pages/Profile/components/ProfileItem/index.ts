import Block from '../../../../core/Block';
import template from './template';

import type IProfileItem from './types/types';

import './style.scss';

export default class ProfileItem extends Block<IProfileItem.Props, IProfileItem.Refs> {
  constructor(props: IProfileItem.Props) {
    super({
      ...props,
      onBlur: () => this._isValid,
    });
  }
  private get _value() {
    return (this.refs.input.element as HTMLInputElement).value;
  }

  get value() {
    if (this._isValid) {
      return this._value;
    }

    console.error('Валидация не пройдена');
  }

  private get _isValid() {
    return this.props.validate(this._value, this.refs.errorText);
  }

  render() {
    return template;
  }
}
