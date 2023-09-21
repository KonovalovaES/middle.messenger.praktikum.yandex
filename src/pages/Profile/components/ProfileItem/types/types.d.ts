import type TextInput from '../../../../../components/Inputs/TextInput';
import type Block from '../../../../../core/Block';
import type ErrorMessage from '../../../../../components/ErrorMessage';

namespace IProfileItem {
  type Props = {
    label: string;
    editProfile: boolean;
    editPassword: boolean;
    value: string;
    name: string;
    placeholder: string;
    type: string;
    onBlur: () => void;
    validate: (str: string, component: Block) => boolean;
  }

  type Refs = { input: TextInput, errorText: ErrorMessage }
}

export default IProfileItem;
