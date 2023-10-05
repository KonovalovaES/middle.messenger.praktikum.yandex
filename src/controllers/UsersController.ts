import usersAPI from '../api/UsersAPI';
import store from '../core/Store/Store';
import handleError from './helpers';

import type IUsersAPI from '../api/UsersAPI/types/types';

class UsersController {
  async changeProfile(data?: IUsersAPI.ChangeProfileRequest) {
    if (!data) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    try {
      const response = await usersAPI.changeProfile(data);

      store.set('user', response);
      store.set('modals.isEditProfileOpen', false);
    } catch (error) {
      handleError(error);
    }
  }

  async changeAvatar(data?: FormData) {
    if (!data) {
      return;
    }

    try {
      const response = await usersAPI.changeAvatar(data);

      store.set('user', response);
    } catch (error) {
      handleError(error);
    }
  }

  async changePassword(data?: IUsersAPI.ChangePasswordRequest) {
    if (!data) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    try {
      await usersAPI.changePassword(data);

      store.set('modals.isEditPasswordOpen', false);
    } catch (error) {
      handleError(error);
    }
  }
}

export default new UsersController();
