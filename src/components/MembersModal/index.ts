import Block from '../../core/Block/Block';
import template from './template';
import connect from '../../core/Store/connect';

import type IMembersModal from './types/types';
import type { IStore } from '../../core/Store/types/types';

import './style.scss';

class MembersModal extends Block<IMembersModal.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({ users: state.chat?.users });
export default connect(MembersModal, mapStateToProps);
