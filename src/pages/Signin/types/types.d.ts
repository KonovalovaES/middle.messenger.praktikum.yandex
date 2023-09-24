import type { InputField } from '../../../mock/types/types';
import type Form from '../../../components/Forms/Form/Form';
import type Signin from '../Signin';

namespace ISignin {
  type Props = {
    fields: InputField[];
    onSignin: (event: Event) => void;
  }

  type Refs = { signinForm: Form }

  interface Components {
    Component: typeof Signin,
    props: Pick<Props, onSignin>,
  }
}

export default ISignin;
