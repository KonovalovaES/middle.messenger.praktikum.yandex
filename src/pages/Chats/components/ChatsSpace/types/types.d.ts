import type { UserChat } from '../../../../../mock/types/types';
import type Chat from '../../Chat';
import ChatsModal from '../../ChatsModal';

namespace IChatsSpace {
  type Props = {
    isAnyChatOpen: boolean;
    open_chat_id: number;
    users: UserChat[];
    chat: Chat;
  }

  type Refs = {
    chat: Chat;
  }
}

export default IChatsSpace;
