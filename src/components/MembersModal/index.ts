import Block from '../../core/Block';
import template from './template';

import type IMembersModal from './types/types';

import './style.scss';

export default class MembersModal extends Block<IMembersModal.Props> {
  render() {
    return template;
  }
}
