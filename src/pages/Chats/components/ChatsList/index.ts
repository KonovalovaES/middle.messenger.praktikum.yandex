import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IChatsList from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsList extends Block<IChatsList.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  chats: state.search && state.chats
    ? Object.values(state.chats).filter((chat) => chat.title.toLowerCase().includes((state.search || '').toLowerCase()))
    : state.chats,
});

export default connect(ChatsList, mapStateToProps);
