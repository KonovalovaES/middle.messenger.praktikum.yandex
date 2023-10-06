import type { User } from '../../../../../mock/types/types';
import ProfileItem from '../../ProfileItem';

namespace IProfileBody {
  type Props = {
    isEditProfileOpen?: boolean;
    isEditPasswordOpen?: boolean;
    user: User;
    emailValidate: (str: string, Error: Block) => boolean;
    loginValidate: (str: string, Error: Block) => boolean;
    nameValidate: (str: string, Error: Block) => boolean;
    phoneValidate: (str: string, Error: Block) => boolean;
    passwordValidate: (str: string, Error: Block) => boolean;
    repeatPasswordValidate: (str: [string, string], Error: Block) => boolean;
  }

  private type EditPasswordRefs = {
    password: ProfileItem;
    new_password: ProfileItem;
    new_password_repeat: ProfileItem;
  }

  private type EditProfileRefs = {
    email: IProfileItem;
    login: IProfileItem;
    first_name: IProfileItem;
    second_name: IProfileItem;
    display_name: IProfileItem;
    phone: IProfileItem;
  }

  type Refs = EditProfileRefs | EditPasswordRefs;
}

export default IProfileBody;
