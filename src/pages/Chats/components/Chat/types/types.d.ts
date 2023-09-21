import type ChatsFooter from '../../ChatsFooter';
import type ChatsModal from '../../ChatsModal';

namespace IChat {
  type Props = {
    avatar: string;
    title: string;
    members: number;
    showMembersMenu: boolean;
    showAddUserModal: boolean;
    showRemoveUserModal: boolean;
    showAvatarLoadModal: boolean;
    open_chat_id: number;
  }

  type Refs = {
    chatFooter: ChatsFooter;
    addUserModal: ChatsModal;
  }
}

export default IChat;
