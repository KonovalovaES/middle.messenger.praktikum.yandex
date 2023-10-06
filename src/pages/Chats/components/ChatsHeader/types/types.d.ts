namespace IChatsHeader {
  type Props = {
    avatar: string;
    title: string;
    members: number;
    isMembersOpen: boolean;
    openChatMenu: () => void;
  }
}

export default IChatsHeader;
