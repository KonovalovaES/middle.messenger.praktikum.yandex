import Block from '../../core/Block';
import template from './template';

import type IAvatar from './types/types';

import './style.scss';

export default class Avatar extends Block<IAvatar.Props> {
  render() {
    return template;
  }
}
