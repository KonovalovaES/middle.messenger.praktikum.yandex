import Block from '../../../core/Block/Block';
import template from './template';

import type IIcon from '../types/types';

export default class OtterIcon extends Block<IIcon.Props> {
  render() {
    return template;
  }
}
