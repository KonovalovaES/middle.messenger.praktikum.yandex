import Block from '../../../../core/Block';
import template from './template';

import type IChatsItem from './types/types';

import './style.scss';

export default class ChatsItem extends Block<IChatsItem.Props> {
  render() {
    return template;
  }
}
