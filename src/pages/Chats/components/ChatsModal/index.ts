import Block from '../../../../core/Block';
import template from './template';

import type IChatsModal from './types/types';

import './style.scss';

export default class ChatsModal extends Block<IChatsModal.Props, IChatsModal.Refs> {
  get newChatName() {
    return this.refs.createChatModal?.values;
  }

  get newUserName() {
    return this.refs.addUserModal?.values;
  }

  render() {
    return template;
  }
}
