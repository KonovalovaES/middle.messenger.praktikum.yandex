import Block from '../../../../core/Block';
import template from './template';

import type IProfileFooter from './types/types';

import './style.scss';

export default class ProfileFooter extends Block<IProfileFooter.Props> {
  render() {
    return template;
  }
}
