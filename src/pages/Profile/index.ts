import Block from '../../core/Block/Block';
import template from './template';
import router from '../../core/Router/Router';
import { PAGES } from '../../consts';
import connect from '../../core/Store/connect';
import authController from '../../controllers/AuthController';

import type IProfile from './types/types';
import type { IStore } from '../../core/Store/types/types';

import './style.scss';
import usersController from '../../controllers/UsersController';
import modalsController from '../../controllers/ModalsController';

class Profile extends Block<IProfile.Props, IProfile.Refs> {
  constructor(props: IProfile.Props) {
    super(props);

    this.props.logout = authController.logout;
    this.props.onExit = modalsController.switchExit;
    this.props.onEditProfile = modalsController.switchEditProfile;
    this.props.onEditPassword = modalsController.switchEditPassword;
    this.props.onSaveProfile = async (event: Event) => {
      event.preventDefault();

      await usersController.changeProfile(this.refs.profileData.values);
    };
    this.props.onSavePassword = async (event: Event) => {
      event.preventDefault();

      await usersController.changePassword(this.refs.profileData.values);
    };
    this.props.goToChats = () => router.go(PAGES.messenger);

    this.props.events = {
      submit: this.props.onSave || ((event: Event) => event.preventDefault()),
    };
  }


  render(): string {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isExitModalOpen: state.modals?.isExitModalOpen,
  user: state.user,
  loading: state.loading,
});

export default connect(Profile, mapStateToProps);
