import Block from '../Block/Block';
import store from './Store';
import StoreEvents from './types/consts';
import { deepClone, isDeepEqual } from './helpers/helpers';

import type { Indexed, IStore } from './types/types';
import type { BaseProps } from '../types/types';

const connect = <Props extends BaseProps = BaseProps>
  (Component: new (props: Props) => Block<Props>, mapStateToProps: (state: IStore) => Indexed) => (
    class extends Component {
      private readonly _onChangeStoreCb: () => void;

      constructor(props: Props) {
        let state = mapStateToProps(store.state);

        super({ ...props, ...state });

        this._onChangeStoreCb = () => {
          const newState = mapStateToProps(store.state);

          if (!isDeepEqual(state, newState)) {
            this.setProps({ ...newState });

            state = deepClone(newState);
          }
        };

        store.on(StoreEvents.Updated, this._onChangeStoreCb);
      }

      componentWillUnmount() {
        super.componentWillUnmount();

        store.off(StoreEvents.Updated, this._onChangeStoreCb);
      }
    }
  );

export default connect;
