import Block from '../../../core/Block';
import template from './template';
import { customHasOwnProperty } from '../../../utils/helpers';

import type IFormInput from './types/types';

import './style.scss';

export default class FormInput extends Block<IFormInput.Props, IFormInput.Refs> {
  constructor(props: IFormInput.Props) {
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
    if (customHasOwnProperty(this.props, 'validate')) {
      return this.props.validate(this._value, this.refs.errorText);
    }

    console.error('Метод валидации не найден');

    return false;
  }

  render(): string {
    return template;
  }
}
