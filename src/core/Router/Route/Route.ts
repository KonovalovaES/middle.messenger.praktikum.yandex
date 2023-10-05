import Block from '../../Block/Block';
import renderDom from './helpers/renderDom';
import isEqual from './helpers/utils';

import type { BaseProps } from '../../types/types';
import type { PropsWithQuery } from './types/types';

export default class Route<Props extends BaseProps = BaseProps> {
  private readonly _pathname: string;
  private readonly _blockClass: new (props: Props) => Block;
  private readonly _props: PropsWithQuery;
  private _block: Block | null = null;

  constructor(pathname: string, view: new (props: Props) => Block, props: PropsWithQuery) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.destroy();
      this._block = null;
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    this._block = new this._blockClass(this._props as Props);
    renderDom(this._props.rootQuery, this._block);
  }

  get path() {
    return this._pathname;
  }
}
