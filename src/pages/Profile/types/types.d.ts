import type { UserProfile } from '../../../mock/types/types';
import type ProfileBody from '../components/ProfileBody';

export namespace IProfile {
  type ProfileProps = {
    user: UserProfile,
    isEditProfileOpen?: false;
    isEditPasswordOpen?: false;
    isExitModalOpen?: false;
    onSave?: (event: Event) => void;
    onCancel?: (event: Event) => void;
    onExit?: () => void;
    onEditProfile?: () => void;
    onEditPassword?: () => void;
    goToChats: () => void;
  }

  type Props = ProfileProps | EditProfileProps | EditPasswordProps | ExitProps;

  type Refs = { profileData: ProfileBody }
}

export default IProfile;
