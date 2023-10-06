import Block from '../../../../core/Block/Block';
import template from './template';

import type IUploadButton from './types/types';

export default class UploadButton extends Block<IUploadButton.Props> {
  constructor(props: IUploadButton.Props) {
    super(props);

    this.props.events = {
      click: this.props.onClick || (() => void 0),
    };
  }

  render() {
    return template;
  }
}
