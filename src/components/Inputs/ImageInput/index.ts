import Block from '../../../core/Block';
import template from './template';

import type IImageInput from './types/types';

import './style.scss';

export default class ImageInput extends Block<IImageInput.Props> {
  render() {
    return template;
  }
}
