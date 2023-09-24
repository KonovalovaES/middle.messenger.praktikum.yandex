import type TextInput from '../../../Inputs/TextInput';

namespace IFormWithoutButtons {
  interface Events {
    submit?: ((event: Event) => void);
  }

  type Props = {
    search?: string;
    events: Events,
    onSubmit?: (event: Event) => void;
    className: string;
    placeholder: string;
    value: string;
    name: string;
    refInput: string;
    refForm: string;
  }

  type Refs = {
    searchInput: TextInput;
  }
}

export default IFormWithoutButtons;
