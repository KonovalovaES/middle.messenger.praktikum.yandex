import type Form from '../../../../../components/Forms/Form';

namespace IChatsModal {
  type Props = {
    title: string;
    mainButtonTitle: string;
    additionalButtonTitle: string;
    text: string;
    imgLoad: boolean;
    avatar: string;
    errorText: string;
  }

  type Refs = {
    createChatModal: Form;
    addUserModal: Form;
  }
}

export default IChatsModal;
