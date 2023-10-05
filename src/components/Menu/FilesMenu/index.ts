import Block from '../../../core/Block/Block';
import template from './template';

import type IFilesMenu from './types/types';

import '../style.scss';

export default class FilesMenu extends Block<IFilesMenu.Props> {
  render() {
    return template;
  }
}
