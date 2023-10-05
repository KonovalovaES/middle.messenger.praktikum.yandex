import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IChatsSpace from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsSpace extends Block<IChatsSpace.Props, IChatsSpace.Refs> {
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

const mapStateToProps = (state: IStore) => ({
  openChatId: state.chat?.id,
  chat: state.chat,
});

export default connect(ChatsSpace, mapStateToProps);
