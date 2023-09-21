namespace IInput {
  interface Events {
    blur?: (() => void);
  }

  type Props = {
    className: string;
    name: string;
    type: string;
    placeholder: string;
    onBlur?: () => void;
    onChange?: () => void;
    ref: string;
    events: Events;
  }
}

export default IInput;
