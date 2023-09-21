import Block from '../../../../core/Block';
import template from './template';

import type IChatsList from './types/types';

import './style.scss';

export default class ChatsList extends Block<IChatsList.Props> {
  constructor(props: IChatsList.Props) {
    super({
      ...props,
    });
  }

  render() {
    return template;
  }
}
