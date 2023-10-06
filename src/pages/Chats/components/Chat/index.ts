import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';
import chatsController from '../../../../controllers/ChatsController';
import modalsController from '../../../../controllers/ModalsController';

import type IChat from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class Chat extends Block<IChat.Props, IChat.Refs> {
  constructor(props: IChat.Props) {
    super(props);

    this.props.addUserFields = [{
      label: 'Логин',
      type: 'text',
      name: 'login',
    }];
    this.props.closeRemoveChatModal = modalsController.closeRemoveChat;
    this.props.closeAvatarLoadModal = modalsController.closeAvatarLoad;
    this.props.closeAddUserModal = modalsController.closeAddUser;
    this.props.closeRemoveUserModal = modalsController.closeRemoveUser;
    this.props.addUser = async (event: Event) => {
      event.preventDefault();

      await chatsController.addUser(this.newUserName.trim());
    };
    this.props.removeUser = async (event: Event) => {
      event.preventDefault();

      await chatsController.removeUser();
    };
    this.props.removeChat = async (event: Event) => {
      event.preventDefault();

      await chatsController.removeChat();
    };
    this.props.onAvatarChange = async (event: Event) => {
      event.preventDefault();

      const input = event.target as HTMLInputElement;

      if (input?.files && input.files.length > 0) {
        const formData = new FormData();

        formData.append('avatar', input.files[0]);

        await chatsController.changeChatAvatar(formData);
      }
    };
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

const mapStateToProps = (state: IStore) => ({
  isChatMenuOpen: state.modals?.isChatMenuOpen,
  isAddUserModalOpen: state.modals?.isAddUserModalOpen,
  isRemoveUserModalOpen: state.modals?.isRemoveUserModalOpen,
  isRemoveChatModalOpen: state.modals?.isRemoveChatModalOpen,
  isAvatarLoadModalOpen: state.modals?.isAvatarLoadModalOpen,
});

export default connect(Chat, mapStateToProps);
