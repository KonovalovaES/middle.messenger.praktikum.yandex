import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IChatsBody from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsBody extends Block<IChatsBody.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  messages: state.chat?.messages,
});

export default connect(ChatsBody, mapStateToProps);
