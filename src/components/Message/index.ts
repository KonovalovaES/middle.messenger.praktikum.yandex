import Block from '../../core/Block';
import template from './template';

import type IMessage from './types/types';

import './style.scss';

export default class Message extends Block<IMessage.Props> {
  render() {
    return template;
  }
}
