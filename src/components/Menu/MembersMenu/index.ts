import Block from '../../../core/Block/Block';
import template from './template';
import modalsController from '../../../controllers/ModalsController';
import connect from '../../../core/Store/connect';

import type IMembersMenu from './types/types';
import type { IStore } from '../../../core/Store/types/types';

import '../style.scss';

class MembersMenu extends Block<IMembersMenu.Props> {
  constructor(props: IMembersMenu.Props) {
    super(props);

    this.props.onChangeAvatar = () => {
      modalsController.switchAvatarLoad();
      modalsController.switchChatMenu();
    };
    this.props.onRemoveChatHistory = () => {
      modalsController.switchRemoveChat();
      modalsController.switchChatMenu();
    };
  }
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isAdmin: state.chat?.users?.find((user) => user.id === state.user?.id)?.role === 'admin',
});

export default connect(MembersMenu, mapStateToProps);
