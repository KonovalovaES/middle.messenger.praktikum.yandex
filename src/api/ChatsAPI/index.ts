import HTTP from '../../core/HTTP/HTTPTransport';

import type IChatsAPI from './types/types';
import type { SuccessResponse, UserInfoResponse } from '../types/types';
import type { IChatInfo } from '../../core/Store/types/types';

const chatAPIInstance = new HTTP('chats');

class ChatsAPI {
  get(data?: IChatsAPI.GetChatsRequest): Promise<IChatInfo[]> {
    return chatAPIInstance.get('/', { data });
  }

  create(data: IChatsAPI.CreateChatRequest): Promise<SuccessResponse> {
    return chatAPIInstance.post('/', { data });
  }

  delete(chatId: number): Promise<IChatsAPI.DeleteChatResponse> {
    return chatAPIInstance.delete('/', { data: { chatId } });
  }

  getUsers(id: number): Promise<UserInfoResponse[]> {
    return chatAPIInstance.get(`/${id}/users`, {});
  }

  uploadAvatar(chatId: number, avatar: FormData): Promise<IChatInfo> {
    avatar.append('chatId', chatId.toString());
    return chatAPIInstance.put('/avatar', { data: avatar });
  }

  addUsers(data: IChatsAPI.AddUsersData): Promise<SuccessResponse> {
    return chatAPIInstance.put('/users', { data });
  }

  deleteUsers(data: IChatsAPI.AddUsersData): Promise<SuccessResponse> {
    return chatAPIInstance.delete('/users', { data });
  }

  getToken(id: number): Promise<IChatsAPI.GetTokenResponse> {
    return chatAPIInstance.post(`/token/${id}`, {});
  }
}

export default new ChatsAPI();
