import Block from '../../../core/Block/Block';
import template from './template';

import type IFormInput from './types/types';

import './style.scss';

export default class FormInput extends Block<IFormInput.Props, IFormInput.Refs> {
  constructor(props: IFormInput.Props) {
    super(props);

    this.props.onBlur = () => this._isValid;
    this.props.validate = this.props.validate || (() => true);
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

  render(): string {
    return template;
  }
}
