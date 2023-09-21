import Block from '../../core/Block';
import template from './template';
import { customHasOwnProperty, isFunction } from '../../utils/helpers';

import type IChats from './types/types';

export default class Chats extends Block<IChats.Props, IChats.Refs> {
  constructor(props: IChats.Props) {
    super(props);

    if (customHasOwnProperty(props, 'onAddUser') && isFunction(props.onAddUser)) {
      this.props.onAddUser = props.onAddUser?.bind(this);
    }

    if (customHasOwnProperty(props, 'onCreateChat') && isFunction(props.onCreateChat)) {
      this.props.onCreateChat = props.onCreateChat?.bind(this);
    }

    if (customHasOwnProperty(props, 'onSearch') && isFunction(props.onSearch)) {
      this.props.onSearch = props.onSearch?.bind(this);
    }

    if (customHasOwnProperty(props, 'onSend') && isFunction(props.onSend)) {
      this.props.onSend = props.onSend?.bind(this);
    }
  }

  get isMessageValid() {
    return !!(this.refs.chatSpace.message.trim());
  }

  render() {
    return template;
  }
}
