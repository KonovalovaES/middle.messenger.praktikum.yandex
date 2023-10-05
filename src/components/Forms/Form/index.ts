import Block from '../../../core/Block/Block';
import template from './template';

import type IForm from './types/types';

import './style.scss';

export default class Form extends Block<IForm.Props, IForm.Refs> {
  constructor(props: IForm.Props) {
    super(props);

    this.props.events = {
      submit: this.props.onSubmit || ((event: Event) => {
        event.preventDefault();
      }),
    };
  }

  get values() {
    if (Object.keys(this.refs).length === 1) {
      return Object.entries(this.refs)[0][1].value;
    }

    let notValid = false;

    const fields = Object.entries(this.refs)
      .reduce((acc, [key, component]) => {
        if (!component.value) {
          notValid = true;
        }

        acc[key] = component.value;

        return acc;
      }, {} as Record<string, string | void>);

    return notValid ? void 0 : fields;
  }

  render(): string {
    return template;
  }
}
