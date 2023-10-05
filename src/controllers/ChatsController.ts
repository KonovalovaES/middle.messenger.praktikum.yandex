import chatsAPI from '../api/ChatsAPI';
import store from '../core/Store/Store';
import usersAPI from '../api/UsersAPI';
import Socket from '../core/Socket/Socket';
import modalsController from './ModalsController';
import { handleError, sortMessages } from './helpers';

const findDifference = (arr1: number[], arr2: number[]) => {
  let result = 0;

  for (const num of arr1.concat(arr2)) {
    result ^= num;
  }

  return result;
};

class ChatsController {
  async createChat(title?: string) {
    if (!title) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    try {
      await chatsAPI.create({ title });

      if (store.state.chats) {
        const oldChats = store.state.chats?.map((chat) => chat.id);

        await this.getAllChats();

        const newChats = store.state.chats?.map((chat) => chat.id);
        const newChatId = findDifference(newChats, oldChats);

        store.set('chat', store.state.chats?.find((chat) => chat.id === newChatId));

        store.set('modals.isCreateChatModalOpen', false);
        store.set('modals.isAddUserModalOpen', true);
      }
    } catch (error) {
      handleError(error);
    }
  }

  async getAllChats() {
    try {
      const chats = await chatsAPI.get();

      if (!store.state.chats) {
        const newChats = await Promise.all(chats.map(async (chat) => ({
          ...chat,
          socket: new Socket({ token: (await chatsAPI.getToken(chat.id)).token, chatId: chat.id }),
          users: (await chatsAPI.getUsers(chat.id)),
        })));

        store.set('chats', sortMessages(newChats));
      } else {
        store.set('chats', sortMessages(chats));
      }
    } catch (error) {
      handleError(error);
    }
  }

  async addUser(userName?: string) {
    if (!userName) {
      alert('Проверьте корректность введнных данных');

      return;
    }

    if (!store.state.chat?.id) {
      alert('Не выбран чат');

      return;
    }

    try {
      const users = await usersAPI.search(userName);

      if (users.length > 1) {
        alert('Введите логин пользователя полностью');

        return;
      }

      await chatsAPI.addUsers({ users: [users[0].id], chatId: store.state.chat.id });
      await this.getUsers(store.state.chat.id);

      store.set('modals.isAddUserModalOpen', false);
    } catch (error) {
      handleError(error);
    }
  }

  async removeUser() {
    if (!store.state.chat?.id) {
      alert('Не найден активный чат');

      return;
    }

    if (!store.state.chat?.toRemove) {
      alert('Не найден пользователь');

      return;
    }

    try {
      await chatsAPI.deleteUsers({
        chatId: store.state.chat.id,
        users: [store.state.chat.toRemove],
      });

      await this.getUsers(store.state.chat.id);

      store.set('modals.isRemoveUserModalOpen', false);
    } catch (error) {
      handleError(error);
    }
  }

  async getUsers(chatId: number | null) {
    if (!chatId) {
      return;
    }

    try {
      const response = await chatsAPI.getUsers(chatId);

      store.set('chat.users', response);
    } catch (error) {
      handleError(error);
    }
  }

  sendMessage(content: string) {
    if (!content) {
      return;
    }

    store.state.chat?.socket?.sendMessage(content);
  }

  switchActiveChat(chatId: number) {
    let newChatId: number | null = null;

    if (chatId !== store.state?.chat?.id) {
      newChatId = chatId;
    }

    if (!newChatId) {
      store.set('chat', void 0);
    } else  {
      store.set('chat', { ...store.state.chats?.find((chat) => chat.id === newChatId), messages: [] });
      store.state.chat?.socket?.getOldMessages();
    }

    modalsController.closeAll();
  }

  async changeChatAvatar(file: FormData) {
    try {
      const chatId = store.state.chat?.id;

      if (chatId) {
        const response = await chatsAPI.uploadAvatar(chatId, file);

        modalsController.closeAvatarLoad();
        store.set('chat', response);
        await this.getAllChats();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async setMessages(data: Record<string, unknown> | Record<string, unknown>[]) {
    if (Array.isArray(data)) {
      store.set('chat.messages', data.reverse());
    } else {
      if (data.type === 'message') {
        store.set('chat.messages', [...store.state.chat?.messages || [], data]);

        if (data.user_id === store.state.user?.id) {
          return;
        }
      }
    }

    await this.getAllChats();
  }

  async removeChat() {
    const chatId = store.state.chat?.id;

    if (chatId) {
      try {
        store.set('chat', void 0);

        await chatsAPI.delete(chatId);
        await this.getAllChats();
      } catch (error) {
        handleError(error);
      }
    }
  }
}

export default new ChatsController();
