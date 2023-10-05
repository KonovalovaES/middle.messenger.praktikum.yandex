import Block from '../../../core/Block/Block';
import template from './template';

import type IIcon from '../types/types';

export default class ExitIcon extends Block<IIcon.Props> {
  render() {
    return template;
  }
}
