import Block from '../../../core/Block/Block';
import template from './template';

import type IImageInput from './types/types';

import './style.scss';

export default class ImageInput extends Block<IImageInput.Props> {
  constructor(props: IImageInput.Props) {
    super(props);

    this.props.onUpload = () => {
      const [input] = document.querySelectorAll('#add_file');

      (input as HTMLInputElement).click();
    };

    this.props.onRemove = () => {};
  }

  render() {
    return template;
  }
}
