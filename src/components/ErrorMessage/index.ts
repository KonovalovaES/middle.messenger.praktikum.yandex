import Block from '../../core/Block/Block';
import template from './template';

import type IErrorMessage from './types/types';

import './style.scss';

export default class ErrorMessage extends Block<IErrorMessage.Props, Record<string, never>> {
  render(): string {
    return template;
  }
}
