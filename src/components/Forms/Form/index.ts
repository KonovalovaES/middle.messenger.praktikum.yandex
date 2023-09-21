import Block from '../../../core/Block';
import template from './template';

import type IFormInput from '../../Inputs/FormInput/types/types';

import './style.scss';
import ProfileItem from '../../../pages/Profile/components/ProfileItem';

export default class Form extends Block<IFormInput.Props, IFormInput.Refs> {
  get values() {
    return Object.entries(this.refs)
      .map(([key, component]: [string, ProfileItem]) => ({ [key]: component.value as string }));
  }

  render(): string {
    return template;
  }
}
