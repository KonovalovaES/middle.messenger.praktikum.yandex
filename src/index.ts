import registerPartials from './utils/registerPartials';
import registerHelpers from './utils/registerHelpers';
import registerComponents from './utils/registerComponents';

import Login from './pages/Login';
import Signin from './pages/Signin';
import Error from './pages/Error';
import Chats from './pages/Chats';
import Profile from './pages/Profile';

import { userProfileInfo, users } from './mock/users';
import login from './mock/login';
import signin from './mock/signin';
import chat from './mock/chat';
import chats from './mock/chats';
import addUser from './mock/addUser';
import createChat from './mock/createChat';
import editProfile from './mock/editProfile';
import editPassword from './mock/editPassword';

import { customHasOwnProperty } from './utils/helpers';
import {
  onAddUser,
  onCreateChat,
  onSearch,
  onSend,
  onLogin,
  onSignin,
  onSave,
} from './utils/eventListeners';

import type IProfile from './pages/Profile/types/types';
import type IChats from './pages/Chats/types/types';
import type ILogin from './pages/Login/types/types';
import type ISignin from './pages/Signin/types/types';
import type IError from './pages/Error/types/types';

type IComponent = IError.Components | ISignin.Components
  | ILogin.Components | IChats.Components | IProfile.Components;

type IPages  = Record<string, IComponent>;

const pages: IPages = {
  login: {
    Component: Login,
    props: {
      fields: login,
      onLogin,
    },
  },
  signin: {
    Component: Signin,
    props: {
      fields: signin,
      onSignin,
    },
  },
  error: {
    Component: Error,
    props: {
      code: 500,
      message: 'Уже фиксим',
      icon: 'OtterIcon',
    },
  },
  error404: {
    Component: Error,
    props: {
      code: 404,
      message: 'Такой страницы нет',
      icon: 'HandIcon',
    },
  },
  chats: {
    Component: Chats,
    props: {
      users,
      chats,
      onSearch,
    },
  },
  chat: {
    Component: Chats,
    props: {
      open_chat_id: 5,
      users,
      chat,
      chats,
      onSend,
      onSearch,
    },
  },
  menu: {
    Component: Chats,
    props: {
      showMembersMenu: true,
      showFilesMenu: true,
      open_chat_id: 5,
      users,
      chat,
      chats,
    },
  },
  members: {
    Component: Chats,
    props: {
      showMembers: true,
      open_chat_id: 5,
      users,
      chat,
      chats,
    },
  },
  'add-user': {
    Component: Chats,
    props: {
      open_chat_id: 5,
      users,
      chat,
      chats,
      showAddUserModal: true,
      fields: addUser,
      onAddUser,
    },
  },
  'remove-user': {
    Component: Chats,
    props: {
      open_chat_id: 5,
      users,
      chat,
      chats,
      showRemoveUserModal: true,
    },
  },
  'create-chat': {
    Component: Chats,
    props: {
      showCreateChatModal: true,
      open_chat_id: 5,
      users,
      chat,
      chats,
      fields: createChat,
      onCreateChat,
    } as IChats.CreateChatProps,
  },
  'remove-chat': {
    Component: Chats,
    props: {
      showRemoveChatModal: true,
      open_chat_id: 5,
      users,
      chat,
      chats,
    },
  },
  'avatar-load': {
    Component: Chats,
    props: {
      showAvatarLoadModal: true,
      open_chat_id: 5,
      users,
      chat,
      chats,
    },
  },
  profile: {
    Component: Profile,
    props: {
      user: userProfileInfo,
      fields: editProfile,
    },
  },
  'edit-profile': {
    Component: Profile,
    props: {
      user: userProfileInfo,
      editProfile: true,
      fields: editProfile,
      onSave,
    } as IProfile.EditProfileProps,
  },
  'edit-password': {
    Component: Profile,
    props: {
      user: userProfileInfo,
      editPassword: true,
      fields: editPassword,
      onSave,
    } as IProfile.EditPasswordProps,
  },
  exit: {
    Component: Profile,
    props: {
      user: userProfileInfo,
      exit: true,
    },
  },
};

registerPartials();
registerHelpers();
registerComponents();

const navigate = (page: string) => {
  const app = document.getElementById('app');
  const _page = page || 'chats';

  if (!customHasOwnProperty(pages, _page)) {
    const error = new pages.error404.Component(pages.error404.props);

    app?.append(error.getContent()!);

    return;
  }

  const Component = pages[_page];
  const component = new Component.Component(Component.props);
  app?.append(component.getContent()!);
};

document.addEventListener('DOMContentLoaded', () => navigate(window.location.pathname.slice(1)));

document.addEventListener('click', (event: MouseEvent) => {
  const element = event.target;

  if (!element) {
    return;
  }

  const page = (event.target as HTMLLinkElement).getAttribute('page');

  if (!page) {
    return;
  }

  navigate(page);

  event.preventDefault();
  event.stopImmediatePropagation();
});
