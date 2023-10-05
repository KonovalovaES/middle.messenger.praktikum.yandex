import type { InputField } from '../../../mock/types/types';
import type Form from '../../../components/Forms/Form/Form';
import type { IUser } from '../../../core/Store/types/types';

namespace ILogin {
  type Props = {
    fields: InputField[];
    onLogin: (event: Event) => void;
    goToSignup: () => void;
    user?: IUser;
    loader?: boolean;
  }

  type Refs = { loginForm: Form }
}

export default ILogin;
