import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { spy } from 'sinon';

import EventBus from './EventBus';

// eslint-disable-next-line no-duplicate-imports
import type { SinonSpy } from 'sinon';

describe('EventBus', () => {
  let callback: SinonSpy;
  let eventBus: EventBus;
  const testEventName = 'testEvent';
  const notExistingTestEventName = 'notExistingTestEvent';

  beforeEach(() => {
    callback = spy();
    eventBus = new EventBus();
    eventBus.on('testEvent', callback);
  });

  afterEach(() => {
    eventBus.off('testEvent', callback);
  });

  describe('on', () => {
    it('should add a listener to an event', () => {
      expect(eventBus.listeners[testEventName]).to.include(callback);
    });
  });

  describe('off', () => {
    it('should remove a listener from an event', () => {
      eventBus.off('testEvent', callback);

      expect(eventBus.listeners[testEventName]).to.not.include(callback);
    });

    it('should do nothing if the event does not exist', () => {
      eventBus.off('nonExistentEvent', callback);

      expect(eventBus.listeners[notExistingTestEventName]).to.be.undefined;
    });
  });

  describe('emit', () => {
    it('should call all listeners for an event', () => {
      const callback1 = spy();
      const callback2 = spy();

      eventBus.on('testEvent', callback1);
      eventBus.on('testEvent', callback2);

      eventBus.emit('testEvent', 'arg1', 'arg2');

      expect(callback1.calledWith('arg1', 'arg2') && callback2.calledWith('arg1', 'arg2')).to.be.true;
    });

    describe('should do nothing if the event does not exist', () => {
      beforeEach(() => {
        eventBus.emit('nonExistentEvent', 'arg1', 'arg2');
      });

      it('should listeners remain empty', () => {
        expect(eventBus.listeners[notExistingTestEventName]).to.be.undefined;
      });

      it('should callbacks not be called', () => {
        expect(callback.called).to.be.false;
      });
    });
  });
});
