import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';
import router from '../../../../core/Router/Router';
import chatsController from '../../../../controllers/ChatsController';
import modalsController from '../../../../controllers/ModalsController';
import { PAGES } from '../../../../consts';

import type IChatsPanel from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsPanel extends Block<IChatsPanel.Props, IChatsPanel.Refs> {
  constructor(props: IChatsPanel.Props) {
    super(props);

    this.props.openCreateChatModal = modalsController.switchCreateChat;
    this.props.newChatFields = [
      {
        type: 'text',
        name: 'chat_name',
      },
    ];
    this.props.createChat = async (event: Event) => {
      event.preventDefault();

      await chatsController.createChat(this.refs.createChatModal.newChatName.trim());
    };
    this.props.onSearch = (event: Event) => {
      event.preventDefault();

      modalsController.setSearch(this.searchString);
    };
    this.props.goToProfile = () => router.go(PAGES.settings);
  }

  get searchString() {
    return this.refs.searchForm.value;
  }

  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  search: state.search,
  isCreateChatModalOpen: state.modals?.isCreateChatModalOpen,
});

export default connect(ChatsPanel, mapStateToProps);
