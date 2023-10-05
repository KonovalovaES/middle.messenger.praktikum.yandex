import Block from '../../core/Block/Block';
import template from './template';
import router from '../../core/Router/Router';
import { PAGES } from '../../consts';

import type IError from './types/types';

import './style.scss';

export default class Error extends Block<IError.Props> {
  constructor(props: IError.Props) {
    super(props);

    this.props.goToChats = () => router.go(PAGES.messenger);
  }
  render() {
    return (template);
  }
}
