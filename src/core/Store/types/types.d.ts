import Socket from '../../Socket/Socket';

export type Indexed<T = any> = {
  [key in string]: T;
};

type StringIndexed = Record<string, any>;

interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  email: string;
  login: string;
  phone: string;
  avatar: string | null;
  role?: 'admin' | 'regular',
}

interface IMessage {
  id: number;
  content: string;
  type: 'message';
  time: string;
  user_id: number;
}

interface IChatInfo {
  id: number;
  title: string,
  avatar: string;
  unread_count?: number;
  created_by: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    },
    time: string;
    content: string;
  }
  users?: IUser[];
  toRemove?: number;
  messages?: IMessage[];
  socket?: Socket;
}

interface IModals {
  isChatMenuOpen?: boolean;
  isFilesMenuOpen?: boolean;
  isMembersOpen?: boolean;
  isAddUserModalOpen?: boolean;
  isRemoveUserModalOpen?: boolean;
  isCreateChatModalOpen?: boolean;
  isRemoveChatModalOpen?: boolean;
  isAvatarLoadModalOpen?: boolean;
  isExitModalOpen?: boolean;
  isEditProfileOpen?: boolean;
  isEditPasswordOpen?: boolean;
}

export interface IStore {
  modals?: IModals,
  user?: IUser;
  search?: string;
  chats?: (ChatPreview & { users?: IUser[], socket?: Socket })[];
  chat?: IChatInfo;
  loading?: boolean;
  sockets?: Record<number, Socket>;
  unreadCount?: Record<number, number>;
  file?: FormData;
}
