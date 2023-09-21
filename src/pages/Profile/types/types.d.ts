import type { InputField, UserProfile } from '../../../mock/types/types';
import Profile from '../../Profile';
import ProfileBody from '../components/ProfileBody';

export namespace IProfile {
  type ProfileProps = {
    user: UserProfile,
    editProfile?: false;
    editPassword?: false;
    exit?: false;
    onSave?: (event: Event) => void;
    onCancel?: (event: Event) => void;
    onExit?: (event: Event) => void;
  }

  type EditProfileProps = {
    editProfile: true;
    editPassword?: false;
    fields: InputField[];
    onSave?: (event: Event) => void;
    onCancel?: (event: Event) => void;
    onExit?: (event: Event) => void;
  }

  type EditPasswordProps = {
    editProfile?: false;
    editPassword: true;
    fields: InputField[];
    onSave?: (event: Event) => void;
    onCancel?: (event: Event) => void;
    onExit?: (event: Event) => void;
  }

  type ExitProps = {
    user: UserProfile,
    editProfile?: false;
    editPassword?: false;
    exit: true;
    onSave?: (event: Event) => void;
    onCancel?: (event: Event) => void;
    onExit?: (event: Event) => void;
  }

  type Props = ProfileProps | EditProfileProps | EditPasswordProps | ExitProps;

  type Refs = { profileData: ProfileBody }

  interface Components {
    Component: typeof Profile,
    props: Props,
  }
}

export default IProfile;
