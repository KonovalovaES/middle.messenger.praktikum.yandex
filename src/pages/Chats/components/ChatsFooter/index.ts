import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';
import chatsController from '../../../../controllers/ChatsController';
import modalsController from '../../../../controllers/ModalsController';

import type IChatsFooter from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsFooter extends Block<IChatsFooter.Props, IChatsFooter.Refs> {
  constructor(props: IChatsFooter.Props) {
    super(props);

    this.props.openFilesMenu = modalsController.switchFileMenu;
    this.props.onSend = (event: Event) => {
      event.preventDefault();

      chatsController.sendMessage(this.message.trim());
      this.refs.messageForm.clear();
    };
  }
  get message() {
    return this.refs.messageForm.value;
  }

  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({ isFilesMenuOpen: state.modals?.isFilesMenuOpen });

export default connect(ChatsFooter, mapStateToProps);
