import type { InputField } from '../../../mock/types/types';
import type Form from '../../../components/Forms/Form/Form';
import type { IUser } from '../../../core/Store/types/types';

namespace ISignup {
  type Props = {
    fields: InputField[];
    onSignup: (event: Event) => void;
    goToLogin: () => void;
    user?: IUser;
  }

  type Refs = { signupForm: Form }
}

export default ISignup;
