import Block from '../../../../core/Block';
import template from './template';

import type IChatsBody from './types/types';

import './style.scss';

export default class ChatsBody extends Block<IChatsBody.Props> {
  render() {
    return template;
  }
}
