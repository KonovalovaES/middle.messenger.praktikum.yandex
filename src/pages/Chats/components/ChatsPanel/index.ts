import Block from '../../../../core/Block';
import template from './template';

import type IChatsPanel from './types/types';

import './style.scss';

export default class ChatsPanel extends Block<IChatsPanel.Props, IChatsPanel.Refs> {
  constructor(props: IChatsPanel.Props) {
    super({
      ...props,
    });
  }

  get searchSting() {
    return this.refs.searchForm.value;
  }

  render() {
    return template;
  }
}
