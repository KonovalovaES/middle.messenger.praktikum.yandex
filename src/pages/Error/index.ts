import Block from '../../core/Block';
import template from './template';

import type IError from './types/types';

import './style.scss';

export default class Error extends Block<IError.Props> {
  render() {
    // {}
    return (template);
  }
}
