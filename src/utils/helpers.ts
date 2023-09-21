import Handlebars from 'handlebars';

import chats from '../mock/chats';
import { userProfileInfo } from '../mock/users';
import { DAYS_OF_WEEK, DAY, WEEK } from '../consts';

import type { Message, GroupedMessages, UserChat, ChatPreview } from '../mock/types/types';
import type { ContextType } from '../core/types/types';

// Получаем объект с группами сообщений, в ключах - даты
export const groupMessagesByDate = (messages: Message[]) => {
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
  .sort((item1, item2) => (new Date(item1)).getTime() - (new Date(item2)).getTime());

// Получаем сообщения по определенной дате
export const getMessagesAtDate = (messageGroups: GroupedMessages, date: string) => (
  messageGroups[date]
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

export const isCurrentUser = (login: string) => login === userProfileInfo.login;

export const countMembers = (users: UserChat[]) => (users.length > 2 ? users.length : null);

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

const getChatInfo = (chatId: number) => chats.find((chat) => chat.id === chatId);

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

export const createHref = (src: string) => new URL(`/static/images/${src}`, import.meta.url).href;

export const and = (item1: unknown, item2: unknown) => !!(item1 && item2);

export const or = (item1: unknown, item2: unknown) => !!(item1 || item2);

export const compile = (template: string, context: ContextType) => {
  const data: ContextType = {
    ...context,
    __children: [],
    __refs: {},
  };
  const html = Handlebars.compile(template)(data);

  return{ html, children: data.__children, refs: data.__refs };
};

export const filterChats = (chats: ChatPreview[], query: string) => (
  chats.filter((chat) => chat.title.toLowerCase().includes(query.toLowerCase()))
);

export const customHasOwnProperty = (obj: object, prop: string) => (
  Object.prototype.hasOwnProperty.call(obj, prop) && prop !== void 0
);

export const isFunction = (prop: unknown): prop is object => typeof prop === 'function';
