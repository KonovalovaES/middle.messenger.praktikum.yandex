import type FormWithoutButtons from '../../../../../components/Forms/FormWithoutButtons';
import { InputField } from '../../../../../mock/types/types';
import ChatsModal from '../../ChatsModal';

namespace IChatsPanel {
  type Props = {
    search: string;
    ref: string;
    openCreateChatModal: () => void;
    newChatFields: InputField[];
    createChat: (event: Event) => void;
    goToProfile: () => void;
    onSearch: (event: Event) => void;
  }

  type Refs = {
    searchForm: FormWithoutButtons;
    createChatModal: ChatsModal;
  }
}

export default IChatsPanel;
