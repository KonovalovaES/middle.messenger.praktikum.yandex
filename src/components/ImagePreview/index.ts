import Block from '../../core/Block/Block';
import template from './template';

import type IImagePreview from './types/types';

import './style.scss';

export default class ImagePreview extends Block<IImagePreview.Props> {
  render() {
    return template;
  }
}
