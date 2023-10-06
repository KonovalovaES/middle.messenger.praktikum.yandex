import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';
import modalsController from '../../../../controllers/ModalsController';

import type IChatsHeader from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ChatsHeader extends Block<IChatsHeader.Props> {
  constructor(props: IChatsHeader.Props) {
    super(props);

    this.props.openChatMenu = modalsController.switchChatMenu;
  }
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({ isMembersOpen: state.modals?.isMembersOpen });

export default connect(ChatsHeader, mapStateToProps);
