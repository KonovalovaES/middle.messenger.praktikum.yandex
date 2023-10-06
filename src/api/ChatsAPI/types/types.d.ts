namespace IChatsAPI {
  interface GetChatsRequest {
    offset?: number;
    limit?: number;
    title?: string;
  }

  interface CreateChatRequest {
    title: string;
  }

  interface DeleteChatRequest {
    chatId: number;
  }

  interface UsersData extends GetChatsRequest {
    name?: string;
    email?: string;
  }

  interface AddUsersData {
    users: number[];
    chatId: number;
  }

  interface GetTokenResponse {
    token: string;
  }

  interface DeleteChatResponse {
    userId: number;
    result: {
      id: number;
      title: string;
      avatar: string;
      created_by: number;
    }
  }

  type Data = GetChatsRequest | CreateChatRequest | DeleteChatRequest | AddUsersData;
}

export default IChatsAPI;
