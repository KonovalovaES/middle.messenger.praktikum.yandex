import type { User } from '../../../../../mock/types/types';

namespace IProfileHeader {
  type Props = {
    isEditProfileOpen?: boolean;
    user: User;
    onAvatarChange?: (event: Event) => Promise<void>;
  }
}

export default IProfileHeader;
