import type Block from '../../../../core/Block/Block';
import type Input from '../../../input';
import type ErrorMessage from '../../../ErrorMessage/ErrorMessage';

namespace IFormInput {
  type Props = {
    title: string;
    name: string;
    type: string;
    onBlur: () => void;
    validate: (str: string, component: Block) => boolean;
    onAction?: (event: Event) => void;
  }

  type Refs = {
    input: Input;
    errorText: ErrorMessage;
  }
}

export default IFormInput;
