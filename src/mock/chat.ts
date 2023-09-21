import {
  userProfileInfo,
  denisChatInfo as denis,
  filippChatInfo as filipp,
  mariyaChatInfo as mariya,
} from './users';

import type { Message } from './types/types';

const chat: Message[] = [
  {
    content: 'Привет! Как дела?',
    time: '2023-08-24T19:08:32.000Z',
    user: denis,
    chat_id: 5,
  },
  {
    content: 'Привет, Денис! Всё отлично, спасибо. А у тебя?',
    time: '2023-08-24T20:54:16.000Z',
    user: filipp,
    chat_id: 5,
  },
  {
    content: 'Тоже всё хорошо, спасибо за спрос. Планируешь что-то интересное на выходные?',
    time: '2023-08-29T22:18:02.000Z',
    user: denis,
    chat_id: 5,
  },
  {
    content: 'Да, думаю пойти на концерт в субботу. А ты?',
    time: '2023-08-24T23:02:53.000Z',
    user: filipp,
    img: 'concert.jpg',
    chat_id: 5,
  },
  {
    content: 'Звучит отлично! Я тоже хочу провести выходные активно. Может, сходим в парк?',
    time: '2023-08-25T10:13:38.000Z',
    user: mariya,
    chat_id: 5,
  },
  {
    content: 'Прекрасная идея! Давай встретимся в парке в 14:00?',
    time: '2023-08-25T10:16:07.000Z',
    user: denis,
    chat_id: 5,
  },
  {
    content: 'Привет! Я тоже хочу присоединиться к вам в парке. Можно?',
    time: '2023-08-25T10:20:56.000Z',
    user: userProfileInfo,
    chat_id: 5,
  },
  {
    content: 'Конечно! Будем рады видеть.',
    time: '2023-08-25T10:22:23.000Z',
    user: denis,
    chat_id: 5,
  },
  {
    content: 'Куда сегодня пойдем вечером?',
    time: '2023-08-27T18:20:13.000Z',
    user: filipp,
    chat_id: 5,
  },
];

export default chat;
