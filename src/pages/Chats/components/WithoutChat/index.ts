import Block from '../../../../core/Block';
import template from './template';

import type IWithoutChat from './types/types';

import './style.scss';

export default class WithoutChat extends Block<IWithoutChat.Props> {
  render() {
    return template;
  }
}
