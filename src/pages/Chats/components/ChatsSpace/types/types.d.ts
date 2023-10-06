import type { UserChat } from '../../../../../mock/types/types';
import type Chat from '../../Chat';
import ChatsModal from '../../ChatsModal';

namespace IChatsSpace {
  type Props = {
    openChatId: number;
  }

  type Refs = {
    chat: Chat;
  }
}

export default IChatsSpace;
