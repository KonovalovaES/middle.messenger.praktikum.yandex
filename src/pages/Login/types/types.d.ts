import { InputField } from '../../../mock/types/types';
import Form from '../../../components/Forms/Form/Form';
import Login from '../Login';

namespace ILogin {
  type Props = {
    fields: InputField[];
    onLogin: (event: Event) => void;
  }

  type Refs = { loginForm: Form }

  interface Components {
    Component: typeof Login,
    props: Pick<Props, onLogin>,
  }
}

export default ILogin;
