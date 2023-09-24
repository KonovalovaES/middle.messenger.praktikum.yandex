import Block from '../../../core/Block';
import template from './template';

import type IMembersMenu from './types/types';

import '../style.scss';

export default class MembersMenu extends Block<IMembersMenu.Props> {
  render() {
    return template;
  }
}
