import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { stub } from 'sinon';

// eslint-disable-next-line no-duplicate-imports
import type { SinonStub } from 'sinon';

import Route from './Route';
import Block from '../../Block/Block';

class TestBlock extends Block {
  destroy() {}
}

describe('Route', () => {
  const testProps = { rootQuery: '#app' };
  let route: Route;
  let renderStub: SinonStub;

  beforeEach(() => {
    route = new Route('/example', TestBlock, testProps);
    route.render();
    renderStub = stub(route, 'render');
  });

  afterEach(() => {
    renderStub.restore();
  });

  it('should create a new Route instance', () => {
    expect(route.path).to.equal('/example');
  });

  it('should match the pathname', () => {
    expect(route.match('/example')).to.be.true;
  });

  it('should render when navigating to a matching path', () => {
    route.navigate('/example');

    expect(renderStub.calledOnce).to.be.true;
  });

  it('should not render a new Block when navigating to a non-matching path', () => {
    route.navigate('/wrong-path');

    expect(renderStub.called).to.be.false;
  });

  it('should destroy the Block when leaving', () => {
    const destroyStub = stub(TestBlock.prototype, 'destroy');

    route.navigate('/example');
    route.leave();

    expect(destroyStub.calledOnce).to.be.true;

    destroyStub.restore();
  });
});
