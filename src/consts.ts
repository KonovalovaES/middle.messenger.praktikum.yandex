export enum HELPERS {
  getMessageClass = 'getMessageClass',
  getChatTime = 'getChatTime',
  getMessageTime = 'getMessageTime',
  getDate = 'getDate',
  isCurrentUser = 'isCurrentUser',
  isCountMembersShow = 'isCountMembersShow',
  getMembers = 'getMembers',
  isAnyChatOpen = 'isAnyChatOpen',
  getChatAvatar = 'getChatAvatar',
  getChatTitle = 'getChatTitle',
  getGroupMessagesByDate = 'getGroupMessagesByDate',
  normalizeMessageGroupsOrder = 'normalizeMessageGroupsOrder',
  getMessagesAtDate = 'getMessagesAtDate',
  isChatActive = 'isChatActive',
  getIcon = 'getIcon',
  and = 'and',
  or = 'or',
  createHref = 'createHref',
  filterChats = 'filterChats',
}

export const LATIN_ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
export const DAYS_OF_WEEK = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export const MILLISECOND = 1;
export const SECOND = 1000 * MILLISECOND;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;