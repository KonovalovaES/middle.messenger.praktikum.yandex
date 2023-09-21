namespace IChatsItem {
  type Props = {
    id: number;
    open_chat_id: number;
    avatar: string;
    user_avatar: string;
    search: string;
    title: string;
    email: string;
    from: string;
    time: number;
    unread_count: number;
  }
}

export default IChatsItem;
