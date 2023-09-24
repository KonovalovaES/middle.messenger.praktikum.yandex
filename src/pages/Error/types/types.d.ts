import Error from '../Error';

namespace IError {
  type Props = {
    code: number;
    message: string;
    icon: 'OtterIcon' | 'HandIcon';
  }

  interface Components {
    Component: typeof Error,
    props: Props,
  }
}

export default IError;
