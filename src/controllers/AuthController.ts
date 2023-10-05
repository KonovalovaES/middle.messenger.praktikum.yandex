import authAPI from '../api/AuthAPI';
import type IAuthAPI from '../api/AuthAPI/types/types';
import store from '../core/Store/Store';
import router from '../core/Router/Router';
import { PAGES } from '../consts';
import { customHasOwnProperty } from '../utils/helpers';
import handleError from './helpers';

class AuthController {
  async signup(data?: IAuthAPI.SignupRequest) {
    if (!data) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    try {
      await authAPI.signup(data);
      await this.getUser();

      router.go(PAGES.messenger);
    } catch (error) {
      handleError(error);
    }
  }

  async signin(data: IAuthAPI.SigninRequest) {
    if (!data) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    try {
      await authAPI.signin(data);
      await this.getUser();

      router.go(PAGES.messenger);
    } catch (error) {
      if (typeof error === 'object' && customHasOwnProperty(error, 'reason')) {
        alert(error.reason);

        if (error.reason === 'User already in system') {
          await this.getUser();
          router.go(PAGES.messenger);
        }
      } else {
        alert(error);
      }
    }
  }

  async getUser(goToLogin?: boolean) {
    try {
      store.set('user', await authAPI.getUser());

      if (router.route?.path === PAGES.signin || router.route?.path === PAGES.signup) {
        router.go(PAGES.messenger);
      }
    } catch (error) {
      if (!goToLogin) {
        handleError(error);

        return;
      }

      if (router.route?.path !== PAGES.signin && router.route?.path !== PAGES.signup) {
        router.go(PAGES.signin);
      }
    }
  }

  async logout() {
    try {
      await authAPI.logout();

      store.clear();
      router.go(PAGES.signin);
    } catch (error) {
      handleError(error);
    }
  }
}

export default new AuthController();
