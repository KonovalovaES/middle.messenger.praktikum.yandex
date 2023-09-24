import Block from '../../../core/Block';
import template from './template';

import type IIconButton from './types/types';

import '../style.scss';

export default class IconButton extends Block<IIconButton.Props> {
  constructor(props: IIconButton.Props) {
    super(props);

    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  render() {
    return template;
  }
}
