import Handlebars from 'handlebars';

import { HELPERS } from '../consts';
import {
  groupMessagesByDate,
  formatChatTime,
  formatMessageTime,
  getDate,
  isCurrentUserById,
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
  createBaseHref,
  and,
  or,
  getFunction,
  getName,
  getNameById,
  getNewMessagesCount,
  isCurrentUserByLogin,
  getNameByLogin,
  getUserAvatar,
} from './helpers';

const registerHelpers = () => {
  Handlebars.registerHelper(HELPERS.getMessageClass, getMessageClass);
  Handlebars.registerHelper(HELPERS.getChatTime, formatChatTime);
  Handlebars.registerHelper(HELPERS.getMessageTime, formatMessageTime);
  Handlebars.registerHelper(HELPERS.getDate, getDate);
  Handlebars.registerHelper(HELPERS.isCurrentUserById, isCurrentUserById);
  Handlebars.registerHelper(HELPERS.isCurrentUserByLogin, isCurrentUserByLogin);
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
  Handlebars.registerHelper(HELPERS.createBaseHref, createBaseHref);
  Handlebars.registerHelper(HELPERS.getFunction, getFunction);
  Handlebars.registerHelper(HELPERS.getName, getName);
  Handlebars.registerHelper(HELPERS.getNameById, getNameById);
  Handlebars.registerHelper(HELPERS.getNameByLogin, getNameByLogin);
  Handlebars.registerHelper(HELPERS.getNewMessagesCount, getNewMessagesCount);
  Handlebars.registerHelper(HELPERS.getUserAvatar, getUserAvatar);
};

export default registerHelpers;

