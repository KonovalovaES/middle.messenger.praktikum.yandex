import Block from '../../../core/Block';
import template from './template';

import type IIcon from '../types/types';

export default class TrashIcon extends Block<IIcon.Props> {
  render() {
    return template;
  }
}
