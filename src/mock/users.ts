import type { UserProfile, UserChat } from './types/types';

export const userProfileInfo: UserProfile = {
  id: 1,
  first_name: 'Иван',
  second_name: 'Иванов',
  display_name: 'Иван',
  login: 'ivanivanov',
  avatar: 'ivan.png',
  email: 'pochta@yandex.ru',
  phone: '8(909)-967-30-30',
};

const denis = {
  id: 2,
  first_name: 'Денис',
  second_name: 'Обломов',
  display_name: 'Ден',
  login: 'dendendendenis',
  avatar: 'denis.png',
};

export const denisProfileInfo: UserProfile = {
  ...denis,
  email: 'den@email.com',
  phone: '8(935)-836-62-23',
};

export const denisChatInfo: UserChat = {
  ...denis,
  role: 'admin',
};


const filipp = {
  id: 3,
  first_name: 'Филипп',
  second_name: 'Просов',
  display_name: 'Филипп',
  login: 'filyafil',
  avatar: 'filipp.png',
};

export const filippProfileInfo = {
  ...filipp,
  email: 'fil@email.com',
  phone: '8(900)-174-32-63',
};

export const filippChatInfo = { ...filipp };

const mariya = {
  id: 4,
  first_name: 'Мария',
  second_name: 'Дубинина',
  display_name: 'Маша',
  login: 'mashmex',
  avatar: 'masha.png',
};

export const mariyaProfileInfo = {
  ...mariya,
  email: 'mex@email.com',
  phone: '8(900)-174-32-63',
};

export const mariyaChatInfo = { ...mariya };

export const users: UserChat[] = [
  userProfileInfo,
  denis,
  filipp,
  mariya,
];
