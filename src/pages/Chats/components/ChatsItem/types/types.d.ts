import type { IChatInfo } from '../../../../../core/Store/types/types';

namespace IChatsItem {
  type Props = {
    id: number;
    avatar: string;
    user_avatar: string;
    title: string;
    login: string;
    content: string;
    time: string;
  }
}

export default IChatsItem;
