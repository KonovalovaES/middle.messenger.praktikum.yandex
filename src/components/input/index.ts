import Block from '../../core/Block';
import template from './template';

import type IInput from './types/types';

export default class Input extends Block<IInput.Props> {
  constructor(props: IInput.Props) {
    super({
      ...props,
      events: {
        blur: props.onBlur || (() => {}),
      },
    });
  }

  render(): string {
    return template;
  }
}
