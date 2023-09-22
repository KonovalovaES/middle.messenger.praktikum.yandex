import Block from '../../../../core/Block';
import template from './template';
import ProfileItem from '../ProfileItem';

import type IProfileBody from './types/types';

import './style.scss';

export default class ProfileBody extends Block<IProfileBody.Props, IProfileBody.Refs> {
  get values() {
    return Object.entries(this.refs)
      .map(([key, component]: [string, ProfileItem]) => (
        component.value
          ? { [key]: component.value }
          : void 0
      ))
      .filter((field) => !!field);
  }

  render() {
    return template;
  }
}
