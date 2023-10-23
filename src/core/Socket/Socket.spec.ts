import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { createSandbox } from 'sinon';

import Socket from './Socket';

// eslint-disable-next-line no-duplicate-imports
import type { SinonSandbox, SinonStub } from 'sinon';

describe('Socket', () => {
  let sandbox: SinonSandbox;
  let sendStub: SinonStub;
  let socket: Socket;

  beforeEach(() => {
    sandbox = createSandbox();
    socket = new Socket({ chatId: 1, token: 'test_token' });
    sendStub = sandbox.stub(socket.socket, 'send');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should send a message', () => {
    const content = 'Hello, world!';
    socket.sendMessage(content);

    expect(sendStub.calledWith(JSON.stringify({ content, type: 'message' }))).to.be.true;
  });

  it('should get old messages', () => {
    socket.getOldMessages();

    expect(sendStub.calledWith(JSON.stringify({ content: '0', type: 'get old' }))).to.be.true;
  });
});
