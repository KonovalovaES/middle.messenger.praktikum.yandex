import Block from '../../core/Block';
import template from './template';
import { customHasOwnProperty } from '../../utils/helpers';

import type IProfile from './types/types';

import './style.scss';

export default class Profile extends Block<IProfile.Props, IProfile.Refs> {
  constructor(props: IProfile.Props) {
    super(props);

    if (customHasOwnProperty(props, 'onSave')) {
      this.props.onSave = props.onSave?.bind(this);
    }
  }


  render(): string {
    return template;
  }
}
