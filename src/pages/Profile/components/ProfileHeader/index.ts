import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IProfileHeader from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';
import usersController from '../../../../controllers/UsersController';

class ProfileHeader extends Block<IProfileHeader.Props> {
  constructor(props: IProfileHeader.Props) {
    super(props);

    this.props.onAvatarChange = async (event: Event) => {
      const input = event.target as HTMLInputElement;

      if (input?.files && input.files.length > 0) {
        const formData = new FormData();

        formData.append('avatar', input.files[0]);
        await usersController.changeAvatar(formData);
      }
    };
  }
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isEditProfileOpen: state.modals?.isEditProfileOpen,
  avatar: state.user?.avatar,
  display_name: state.user?.display_name,
});

export default connect(ProfileHeader, mapStateToProps);
