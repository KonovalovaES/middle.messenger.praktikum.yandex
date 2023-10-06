import type TextInput from '../../../../../components/Inputs/TextInput';
import type Block from '../../../../../core/Block/Block';
import type ErrorMessage from '../../../../../components/ErrorMessage';

namespace IProfileItem {
  type Props = {
    isEditProfileOpen?: boolean;
    isEditPasswordOpen?: boolean;
    value: string;
    onBlur: () => void;
    validate: (str: string, component: Block) => boolean;
  }

  type Refs = { input: TextInput, errorText: ErrorMessage }
}

export default IProfileItem;
