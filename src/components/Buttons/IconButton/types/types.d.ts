namespace IIconButton {
  interface Event {
    click: () => void;
  }

  type Props = {
    class: string;
    text?: string;
    icon: string;
    iconClass: string;
    onClick?: () => void;
  }
}

export default IIconButton;
