import Block from '../../../../../core/Block/Block';
import template from './template';

import type IFilesInput from './types/types';

export default class FilesInput extends Block<IFilesInput.Props> {
  constructor(props: IFilesInput.Props) {
    super(props);

    this.props.events = {
      change: this.props.onChange || (() => void 0),
    };
  }
  render() {
    return template;
  }
}
