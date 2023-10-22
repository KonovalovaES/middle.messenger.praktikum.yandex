import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { spy, stub } from 'sinon';

import store, { Store } from './Store';
import authController from '../../controllers/AuthController';
import StoreEvents from './types/consts';

describe('Store', () => {
  let testStore: Store;
  const path1 = 'user';
  const path2 = 'name';
  const path = `${path1}.${path2}`;
  const name = 'John Doe';

  beforeEach(() => {
    testStore = store;
  });

  describe('set', () => {
    it('should set data in the store', () => {
      testStore.set(path, name);

      expect(testStore.state[path1])
        .to
        .deep
        .equal({ [path2]: name });
    });

    it('should emit an "Updated" event when data is set', () => {
      const emitSpy = spy(testStore, 'emit');

      testStore.set(path, name);

      expect(emitSpy.calledWith(StoreEvents.Updated)).to.be.true;
      emitSpy.restore();
    });
  });

  describe('clear', () => {
    it('should clear the state', () => {
      testStore.clear();

      expect(testStore.state).to.deep.equal({});
    });
  });

  describe('init', () => {
    it('should call authController.getUser and await it', async () => {
      const getUserStub = stub(authController, 'getUser').resolves();

      await testStore.init();

      expect(getUserStub.calledWith()).to.be.true;

      getUserStub.restore();
    });
  });
});
