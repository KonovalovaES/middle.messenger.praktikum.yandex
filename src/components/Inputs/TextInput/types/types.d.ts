namespace ITextInput {
  interface Events {
    blur?: () => void;
  }

  type Props = {
    className: string;
    name: string;
    placeholder: string;
    value: string;
    type: string;
    onBlur?: () => void;
    onChange?: () => void;
    events: Events;
  }
}

export default ITextInput;
