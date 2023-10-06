import Block from '../../core/Block/Block';
import template from './template';

import type IMenuItem from './types/types';

export default class MenuItem extends Block<IMenuItem.Props> {
  constructor(props: IMenuItem.Props) {
    super(props);

    this.props.events = {
      click: this.props.onClick || (() => void 0),
    };
  }
  render() {
    return template;
  }
}
