import FormWithoutButtons from '../../../../../components/Forms/FormWithoutButtons';

namespace IChatsFooter {
  type Props = {
    isFilesMenuOpen: boolean;
    openFilesMenu: () => void;
    onSend: (event: Event) => void;
  }

  type Refs = {
    messageForm: FormWithoutButtons;
  }
}

export default IChatsFooter;
