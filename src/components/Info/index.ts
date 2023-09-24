import Block from '../../core/Block';
import template from './template';

import type IInfo from './types/types';

import './style.scss';

export default class Info extends Block<IInfo.Props> {
  render() {
    return template;
  }
}