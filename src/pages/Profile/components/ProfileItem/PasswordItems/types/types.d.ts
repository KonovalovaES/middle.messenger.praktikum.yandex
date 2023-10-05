import ProfileItem from '../../index';

namespace IPasswordItems {
  type Props = {
    passwordValidate: (str: string, Error: Block) => boolean;
    repeatPasswordValidate: (str: [string, string], Error: Block) => boolean;
    onRepeatPasswordBlur: () => void;
    onPasswordBlur: () => void;
  }

  type Refs = {
    new_password: ProfileItem;
    repeat_new_password: ProfileItem;
  }
}

export default IPasswordItems;
