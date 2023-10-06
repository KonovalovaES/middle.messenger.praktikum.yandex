namespace IError {
  type Props = {
    code: number;
    message: string;
    icon: 'OtterIcon' | 'HandIcon';
    goToChats: () => void;
  }
}

export default IError;
