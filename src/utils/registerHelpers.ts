import Handlebars from 'handlebars';

import { HELPERS } from '../consts';
import {
  groupMessagesByDate,
  formatChatTime,
  formatMessageTime,
  getDate,
  isCurrentUser,
  countMembers,
  getMembers,
  isAnyChatOpen,
  getChatAvatar,
  getChatTitle,
  sortedGroupDates,
  getMessagesAtDate,
  isChatActive,
  getIcon,
  getMessageClass,
  createHref,
  and,
  or, filterChats,
} from './helpers';

const registerHelpers = () => {
  Handlebars.registerHelper(HELPERS.getMessageClass, getMessageClass);
  Handlebars.registerHelper(HELPERS.getChatTime, formatChatTime);
  Handlebars.registerHelper(HELPERS.getMessageTime, formatMessageTime);
  Handlebars.registerHelper(HELPERS.getDate, getDate);
  Handlebars.registerHelper(HELPERS.isCurrentUser, isCurrentUser);
  Handlebars.registerHelper(HELPERS.isCountMembersShow, countMembers);
  Handlebars.registerHelper(HELPERS.getMembers, getMembers);
  Handlebars.registerHelper(HELPERS.isAnyChatOpen, isAnyChatOpen);
  Handlebars.registerHelper(HELPERS.getChatAvatar, getChatAvatar);
  Handlebars.registerHelper(HELPERS.getChatTitle, getChatTitle);
  Handlebars.registerHelper(HELPERS.getGroupMessagesByDate, groupMessagesByDate);
  Handlebars.registerHelper(HELPERS.normalizeMessageGroupsOrder, sortedGroupDates);
  Handlebars.registerHelper(HELPERS.getMessagesAtDate, getMessagesAtDate);
  Handlebars.registerHelper(HELPERS.isChatActive, isChatActive);
  Handlebars.registerHelper(HELPERS.getIcon, getIcon);
  Handlebars.registerHelper(HELPERS.and, and);
  Handlebars.registerHelper(HELPERS.or, or);
  Handlebars.registerHelper(HELPERS.createHref, createHref);
  Handlebars.registerHelper(HELPERS.filterChats, filterChats);
};

export default registerHelpers;
