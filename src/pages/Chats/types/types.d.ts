import type { ChatPreview, InputField, Message, UserChat } from '../../../mock/types/types';
import type Chats from '../Chats'
import type ChatsSpace from '../components/ChatsSpace';
import ChatsPanel from '../components/ChatsPanel';
import ChatsModal from '../components/ChatsModal';

namespace IChats {
  type EmptyChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat?: void;
    open_chat_id?: void;
    search?: '';
    fields?: void;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type ChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: false;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: (event: Event) => void;
    onSearch?: (event: Event) => void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type MenuChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: false;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: true;
    showFilesMenu?: true;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type MembersChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: false;
    showMembers: true;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type AddUserChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields: InputField[];
    showMembers?: false;
    showAddUserModal: true;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: AddUserFunction;
  }

  type RemoveUserChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: void;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal: true;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type CreateChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    search?: '';
    fields: InputField[];
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal: true;
    showRemoveChatModal?: false;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat: (event: Event) => void;
    onAddUser?: void;
  }

  type RemoveChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: void;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal: true;
    showAvatarLoadModal?: false;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type AvatarLoadChatProps = {
    users: UserChat[];
    chats: ChatPreview[];
    chat: Message[];
    open_chat_id: number;
    search?: '';
    fields?: void;
    showMembers?: false;
    showAddUserModal?: false;
    showRemoveUserModal?: false;
    showMembersMenu?: false;
    showFilesMenu?: false;
    showCreateChatModal?: false;
    showRemoveChatModal?: false;
    showAvatarLoadModal: true;
    onSend?: void;
    onSearch?: void;
    onCreateChat?: void;
    onAddUser?: void;
  }

  type AddUserFunction = (this: Chats, event: Event) => void;

  type Props = EmptyChatProps | ChatProps | MenuChatProps
    | MembersChatProps | AddUserChatProps | RemoveUserChatProps
    | CreateChatProps | RemoveChatProps | AvatarLoadChatProps;

  type Refs = {
    chatSpace: ChatsSpace;
    chatPanel: ChatsPanel;
    createChatModal: ChatsModal;
    addUserModal: ChatsModal;
  }

  interface Components {
    Component: typeof Chats,
    props: Props,
  }
}

export default IChats;
