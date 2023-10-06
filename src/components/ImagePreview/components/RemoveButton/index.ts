import Block from '../../../../core/Block/Block';
import template from './template';

import type IRemoveButton from './types/types';

export default class RemoveButton extends Block<IRemoveButton.Props> {
  constructor(props: IRemoveButton.Props) {
    super(props);

    this.props.events = {
      click: this.props.onClick || (() => void 0),
    };
  }

  render() {
    return template;
  }
}
