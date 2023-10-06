import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IProfileFooter from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ProfileFooter extends Block<IProfileFooter.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isEditProfileOpen: state.modals?.isEditProfileOpen,
  isEditPasswordOpen: state.modals?.isEditPasswordOpen,
});

export default connect(ProfileFooter, mapStateToProps);
