import Block from '../../core/Block/Block';
import template from './template';
import connect from '../../core/Store/connect';

import type IInfo from './types/types';
import type { IStore } from '../../core/Store/types/types';

import './style.scss';

class Info extends Block<IInfo.Props> {
  render() {
    return template;
  }
}

const mapStateToProps = (state: IStore) => ({ search: state.search });

export default connect(Info, mapStateToProps);
