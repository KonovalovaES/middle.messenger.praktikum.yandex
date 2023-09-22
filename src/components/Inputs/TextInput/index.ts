import Block from '../../../core/Block';
import template from './template';

import type ITextInput from './types/types';

import './style.scss';

export default class TextInput extends Block<ITextInput.Props> {
  render() {
    return template;
  }
}
