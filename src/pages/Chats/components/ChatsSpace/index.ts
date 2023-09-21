import Block from '../../../../core/Block';
import template from './template';

import type IChatsSpace from './types/types';

import './style.scss';

export default class ChatsSpace extends Block<IChatsSpace.Props, IChatsSpace.Refs> {
  get message() {
    return this.refs.chat.message;
  }

  get newUserName() {
    return this.refs.chat.newUserName;
  }

  render() {
    return template;
  }
}
