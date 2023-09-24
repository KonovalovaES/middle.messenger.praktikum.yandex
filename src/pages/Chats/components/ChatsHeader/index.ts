import Block from '../../../../core/Block';
import template from './template';

import type IChatsHeader from './types/types';

import './style.scss';

export default class ChatsHeader extends Block<IChatsHeader.Props> {
  render() {
    return template;
  }
}
