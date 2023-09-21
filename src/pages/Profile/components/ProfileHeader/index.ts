import Block from '../../../../core/Block';
import template from './template';

import type IProfileHeader from './types/types';

import './style.scss';

export default class ProfileHeader extends Block<IProfileHeader.Props> {
  render() {
    return template;
  }
}
