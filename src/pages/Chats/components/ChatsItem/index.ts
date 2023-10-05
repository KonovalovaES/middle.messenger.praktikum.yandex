import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IChatsItem from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';
import chatsController from '../../../../controllers/ChatsController';

class ChatsItem extends Block<IChatsItem.Props> {
  constructor(props: IChatsItem.Props) {
    super(props);

    this.props.events = {
      click: async () => chatsController.switchActiveChat(this.props.id),
    };
  }
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  openChatId: state.chat?.id,
});

export default connect(ChatsItem, mapStateToProps);
