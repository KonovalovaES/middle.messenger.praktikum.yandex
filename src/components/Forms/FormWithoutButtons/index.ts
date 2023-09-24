import Block from '../../../core/Block';
import template from './template';

import type IFormWithoutButtons from './types/types';

import './style.scss';

export default class FormWithoutButtons extends
  Block<IFormWithoutButtons.Props, IFormWithoutButtons.Refs> {
  constructor(props: IFormWithoutButtons.Props) {
    super(props);

    this.props.events = {
      submit: this.props.onSubmit || ((event: Event) => {
        event.preventDefault();
      }),
    };
  }

  get value() {
    return (Object.values(this.refs)[0].element as HTMLInputElement).value;
  }

  render(): string {
    return template;
  }
}
