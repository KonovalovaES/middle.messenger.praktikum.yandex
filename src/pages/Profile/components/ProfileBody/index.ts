import Block from '../../../../core/Block';
import template from './template';

import type IProfileBody from './types/types';

import './style.scss';
import ProfileItem from '../ProfileItem';

export default class ProfileBody extends Block<IProfileBody.Props, IProfileBody.Refs> {
  get values() {
    return Object.entries(this.refs)
      .map(([key, component]: [string, ProfileItem]) => ({ [key]: component.value as string }));
  }

  render() {
    return template;
  }
}
