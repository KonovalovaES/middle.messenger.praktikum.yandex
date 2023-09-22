import Block from '../../../core/Block';
import template from './template';
import ProfileItem from '../../../pages/Profile/components/ProfileItem';

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

    return Object.entries(this.refs)
      .map(([key, component]: [string, ProfileItem]) => ({ [key]: component.value }));
  }

  render(): string {
    return template;
  }
}
