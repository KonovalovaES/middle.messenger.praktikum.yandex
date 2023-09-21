import Block from '../../core/Block';
import template from './template';

import type IContent from './types/types';

import './style.scss';

export default class Content extends Block<IContent.Props> {
  constructor(props: IContent.Props) {
    super({
      ...props,
    });
  }
  render() {
    return template;
  }
}
