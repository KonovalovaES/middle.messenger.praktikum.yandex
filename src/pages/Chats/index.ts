import Block from '../../core/Block/Block';
import template from './template';

import type IChats from './types/types';
import chatsController from '../../controllers/ChatsController';

export default class Chats extends Block<IChats.Props> {
  constructor(props: IChats.Props) {
    super(props);

    chatsController.getAllChats().catch(console.error);
  }

  render() {
    return template;
  }
}
