import Handlebars from 'handlebars';

import store from '../core/Store/Store';
import { DAYS_OF_WEEK, DAY, WEEK } from '../consts';

import type { IMessage, IUser } from '../core/Store/types/types';

export type GroupedMessages = Record<string, IMessage[]>;

// Получаем объект с группами сообщений, в ключах - даты
export const groupMessagesByDate = (messages?: IMessage[]) => {
  if (!messages) {
    return {};
  }
  const groupedMessages: GroupedMessages = {};

  messages.forEach((message) => {
    const dateString = new Date(message.time).toDateString();

    if (!groupedMessages[dateString]) {
      groupedMessages[dateString] = [];
    }

    groupedMessages[dateString].push(message);
  });

  return groupedMessages;
};

// Получаем отсортированные даты групп сообщений
export const sortedGroupDates = (groupedMessages: GroupedMessages) => Object.keys(groupedMessages)
  .sort((item1, item2) => (new Date(item2)).getTime() - (new Date(item1)).getTime());

// Получаем сообщения по определенной дате
export const getMessagesAtDate = (messageGroups: GroupedMessages, date: string) => (
  messageGroups[date].reverse()
);

export const formatChatTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();

  if (diffInMilliseconds < DAY) {
    // Текущая дата
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  if (diffInMilliseconds < WEEK) {
    // Текущая неделя
    return DAYS_OF_WEEK[date.getDay()];
  }

  if (date.getFullYear() === now.getFullYear()) {
    // Текущий год
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
  }

  // Предыдущие годы
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' });
};

export const formatMessageTime = (dateStr: string) => (
  new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
);

export const getDate = (dateStr: string) => {
  const now = new Date();
  const date = new Date(dateStr);

  if (date.getFullYear() === now.getFullYear()) {
    // Текущий год
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' });
  }

  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
};

export const isCurrentUserById = (id: number) => id === store.state.user?.id;
export const isCurrentUserByLogin = (login: string) => login === store.state.user?.login;

export const countMembers = (users?: IUser[]) => (
  users && users.length > 2 ? users.length : null
);

export const getMembers = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return `${count} участник`;
  }

  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return `${count} участника`;
  }

  return `${count} участников`;
};

export const isAnyChatOpen = (chatId: number) => !!(chatId || chatId === 0);

const getChatInfo = (chatId: number) => store.state.chats?.find((chat) => chat.id === chatId);

export const getChatAvatar = (chatId: number) => {
  const chat = getChatInfo(chatId);

  if (chat) {
    return chat.avatar;
  }
};

export const getChatTitle = (chatId: number) => {
  const chat = getChatInfo(chatId);

  if (chat) {
    return chat.title;
  }
};

export const isChatActive = (chatId: number, openChatId: number) => chatId === openChatId;

export const getIcon = (iconName: string, className: string) => {
  const icon = Handlebars.partials[iconName];

  if (icon) {
    return new Handlebars.SafeString(icon.split('{{ className }}').join(`${className}`));
  }

  console.warn(`Иконка ${iconName} не найдена`);
};

export const getMessageClass = (outgoing: boolean) => (outgoing ? 'outgoing' : 'incoming');

export const createHref = (src: string) => `https://ya-praktikum.tech/api/v2/resources${src}`;

export const createBaseHref = (src: string) => new URL(`/static/images/${src}`, import.meta.url);

export const and = (item1: unknown, item2: unknown) => !!(item1 && item2);

export const or = (item1: unknown, item2: unknown) => !!(item1 || item2);

export const customHasOwnProperty = (obj: object, prop: string) => (
  Object.prototype.hasOwnProperty.call(obj, prop) && prop !== void 0
);

export const getFunction = (
  value1: boolean,
  function1: () => void,
  value2: boolean,
  function2: () => void,
) => {
  if (value1) {
    return function1;
  }

  if (value2) {
    return function2;
  }
};

export const getName = (display_name: string | null, first_name: string, second_name: string) => (
  display_name ? display_name : `${first_name} ${second_name}`
);

export const getNameById = (id: number) => {
  const user = store.state.chat?.users?.find((user) => user.id === id);

  return user ? getName(user.display_name, user.first_name, user.second_name) : 'Unknown User';
};

export const getNameByLogin = (login: string, id: number) => {
  const user = store.state.chats
    ? store.state.chats
      ?.find((chat) => chat.id === id)?.users
      ?.find((user: IUser) => user.login === login)
    : void 0;

  return user ? getName(user.display_name, user.first_name, user.second_name) : 'Unknown User';
};

export const getNewMessagesCount = (id: number) => (
  store.state.chats?.find((chat) => chat.id === id)?.unread_count
);

export const getUserAvatar = (userId: number) => {
  const user = store.state.chat?.users?.find((user) => user.id === userId);

  if (user) {
    return user.avatar;
  }
};


