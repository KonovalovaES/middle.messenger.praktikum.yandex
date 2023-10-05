import router from './core/Router/Router';

import registerPartials from './utils/registerPartials';
import registerHelpers from './utils/registerHelpers';
import registerComponents from './utils/registerComponents';
import { PAGES } from './consts';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import store from './core/Store/Store';

import type IError from './pages/Error/types/types';

registerPartials();
registerHelpers();
registerComponents();

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(PAGES.signin, Login)
    .use(PAGES.signup, Signup)
    .use(PAGES.error, Error, { code: 500, message: 'Уже фиксим', icon: 'OtterIcon' } as IError.Props)
    .use(PAGES.error404, Error, { code: 404, message: 'Такой страницы нет', icon: 'HandIcon' } as IError.Props)
    .use(PAGES.messenger, Chats)
    .use(PAGES.settings, Profile)
    .start();

  await store.init();
});
