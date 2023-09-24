import Block from '../../core/Block';
import template from './template';

import type IInput from './types/types';

export default class Input extends Block<IInput.Props> {
  constructor(props: IInput.Props) {
    super(props);

    this.props.events = {
      blur: this.props.onBlur || (() => {}),
    };
  }

  render(): string {
    return template;
  }
}
