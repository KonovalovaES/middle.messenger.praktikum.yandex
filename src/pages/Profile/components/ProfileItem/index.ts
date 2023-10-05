import Block from '../../../../core/Block/Block';
import template from './template';
import connect from '../../../../core/Store/connect';

import type IProfileItem from './types/types';
import type { IStore } from '../../../../core/Store/types/types';

import './style.scss';

class ProfileItem extends Block<IProfileItem.Props, IProfileItem.Refs> {
  constructor(props: IProfileItem.Props) {
    super(props);

    this.props.onBlur = this.props.onBlur || (() => this.isValid);
    this.props.validate = this.props.validate || (() => true);
  }
  get _value() {
    return (this.refs.input.element as HTMLInputElement).value;
  }

  get rawValue() {
    return this._value;
  }

  get value() {
    if (this.isValid) {
      return this._value;
    }

    console.error('Валидация не пройдена');
  }

  get isValid() {
    return this.props.validate(this._value, this.refs.errorText);
  }

  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({
  isEditProfileOpen: state.modals?.isEditProfileOpen,
  isEditPasswordOpen: state.modals?.isEditPasswordOpen,
});

export default connect(ProfileItem, mapStateToProps);
