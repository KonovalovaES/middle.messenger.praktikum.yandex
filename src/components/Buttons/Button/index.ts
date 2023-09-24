import Block from '../../../core/Block';
import template from './template';

import type IButton from './types/types';

import '../style.scss';

export default class Button extends Block<IButton.Props> {
  constructor(props: IButton.Props) {
    super(props);

    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  render() {
    return template;
  }
}
