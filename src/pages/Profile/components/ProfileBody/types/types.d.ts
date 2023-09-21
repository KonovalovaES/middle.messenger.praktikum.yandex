import type { User} from '../../../../../mock/types/types';
import ProfileItem from '../../ProfileItem';

namespace IProfileBody {
  type Props = {
    editProfile: boolean;
    editPassword: boolean;
    user: User;
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
