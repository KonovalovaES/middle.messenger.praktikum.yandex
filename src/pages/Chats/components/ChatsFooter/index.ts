import Block from '../../../../core/Block';
import template from './template';

import type IChatsFooter from './types/types';

import './style.scss';

export default class ChatsFooter extends Block<IChatsFooter.Props, IChatsFooter.Refs> {
  get message() {
    return this.refs.messageForm.value;
  }

  render() {
    return template;
  }
}
