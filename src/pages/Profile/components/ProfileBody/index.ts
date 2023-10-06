import Block from '../../../../core/Block/Block';
import template from './template';

import type IProfileBody from './types/types';

import './style.scss';
import type { IStore } from '../../../../core/Store/types/types';
import connect from '../../../../core/Store/connect';
import {
  emailValidate,
  loginValidate,
  passwordValidate,
  passwordRepeatValidate,
  nameValidate,
  phoneValidate,
} from '../../../../utils/validates';

class ProfileBody extends Block<IProfileBody.Props, IProfileBody.Refs> {
  constructor(props: IProfileBody.Props) {
    super(props);

    this.props.emailValidate = emailValidate;
    this.props.loginValidate = loginValidate;
    this.props.passwordValidate = passwordValidate;
    this.props.repeatPasswordValidate = passwordRepeatValidate;
    this.props.nameValidate = nameValidate;
    this.props.phoneValidate = phoneValidate;
  }
  get values() {
    let notValid = false;

    const fields = Object.entries(this.refs)
      .reduce((acc, [key, component]) => {
        if (!component.value) {
          notValid = true;
        }

        acc[key] = component.value;

        return acc;
      }, {} as Record<string, string | void>);

    return notValid ? void 0 : fields;
  }

  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isEditProfileOpen: state.modals?.isEditProfileOpen,
  isEditPasswordOpen: state.modals?.isEditPasswordOpen,
  login: state.user?.login,
  email: state.user?.email,
  phone: state.user?.phone,
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  display_name: state.user?.display_name,
});

export default connect(ProfileBody, mapStateToProps);
