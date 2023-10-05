import type ChatsFooter from '../../ChatsFooter';
import type ChatsModal from '../../ChatsModal';
import { InputField } from '../../../../../mock/types/types';

namespace IChat {
  type Props = {
    avatar: string;
    title: string;
    members: number;
    isChatMenuOpen: boolean;
    isAddUserModalOpen: boolean;
    isRemoveUserModalOpen: boolean;
    isAvatarLoadModalOpen: boolean;
    openChatId: number;
    closeRemoveChatModal: () => void;
    closeAvatarLoadModal: () => void;
    closeAddUserModal: () => void;
    closeRemoveUserModal: () => void;
    addUserFields: InputField[];
    addUser: (event: Event) => void;
    removeUser: (event: Event) => void;
    removeChat: (event: Event) => Promise<void>;
    onAvatarChange: (event: Event) => Promise<void>;
  }

  type Refs = {
    chatFooter: ChatsFooter;
    addUserModal: ChatsModal;
  }
}

export default IChat;
