import Block from '../../core/Block/Block';
import template from './template';
import connect from '../../core/Store/connect';

import type IMessage from './types/types';
import type { IStore } from '../../core/Store/types/types';

import './style.scss';

class Message extends Block<IMessage.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  userAvatar: state.user?.avatar,
});

export default connect(Message, mapStateToProps);
