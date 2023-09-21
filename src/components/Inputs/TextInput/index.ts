import Block from '../../../core/Block';
import template from './template';

import type ITextInput from './types/types';

import './style.scss';

export default class TextInput extends Block<ITextInput.Props> {
  constructor(props: ITextInput.Props) {
    super({
      ...props,
      events: {
        blur: props.onBlur || (() => {}),
      },
    });
  }

  render() {
    return template;
  }
}
