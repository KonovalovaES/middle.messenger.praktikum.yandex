import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IChatInfo from './types/types';
import type { IStore } from '../../../../core/Store/types/types';
import modalsController from '../../../../controllers/ModalsController';

class ChatInfo extends Block<IChatInfo.Props> {
  constructor(props: IChatInfo.Props) {
    super(props);

    this.props.events = {
      click: modalsController.switchMembers,
    };
  }
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  users: state.chat?.users,
  title: state.chat?.title,
  avatar: state.chat?.avatar,
});

export default connect(ChatInfo, mapStateToProps);
