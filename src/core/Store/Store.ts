import EventBus from '../EventBus/EventBus';
import { StoreEvents } from './types/consts';
import set from './helpers/helpers';

import type { IStore } from './types/types';
import authController from '../../controllers/AuthController';

class Store extends EventBus {
  private _state: IStore = {} as IStore;

  get state() {
    return this._state;
  }

  set(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(StoreEvents.Updated);
  }

  async init() {
    await authController.getUser(true);
  }

  clear() {
    this._state = {} as IStore;
  }
}

export default new Store();
