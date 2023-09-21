import Block from '../../../../core/Block';
import template from './template';

import type IChat from './types/types';

import './style.scss';

// language=hbs
export default class Chat extends Block<IChat.Props, IChat.Refs> {
  constructor(props: IChat.Props) {
    super({
      ...props,
    });
  }

  get message() {
    return this.refs.chatFooter.message;
  }

  get newUserName() {
    return this.refs.addUserModal.newUserName;
  }

  render() {
    return template;
  }
}
