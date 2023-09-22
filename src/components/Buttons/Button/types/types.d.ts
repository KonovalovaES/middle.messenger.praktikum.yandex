namespace IButton {
  type ButtonType = 'link' | 'primary';

  interface Event {
    click: () => void;
  }

  type Props = {
    title: string;
    type: ButtonType;
    className: string;
    onClick?: () => void;
    events: Event;
  }
}

export default IButton;
