import type FormWithoutButtons from '../../../../../components/Forms/FormWithoutButtons';

namespace IChatsPanel {
  type Props = {
    search: string;
    ref: string;
  }

  type Refs = {
    searchForm: FormWithoutButtons;
  }
}

export default IChatsPanel;
