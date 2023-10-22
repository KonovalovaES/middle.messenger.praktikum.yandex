import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { spy, restore } from 'sinon';

import Block from './Block';

// eslint-disable-next-line no-duplicate-imports
import type { SinonSpy } from 'sinon';

class TestBlock extends Block {
  get publicProps() {
    return this.props;
  }

  init() {}

  componentDidUpdate(_oldProps: unknown, _newProps: unknown) {
    return true;
  }

  componentWillUnmount() {}

  render() {
    return '<div>Hello, World!</div>';
  }
}

describe('Block', () => {
  let testBlock: TestBlock;
  let initSpy: SinonSpy;
  let renderSpy: SinonSpy;
  let componentDidMountSpy: SinonSpy;
  let componentDidUpdateSpy: SinonSpy;
  let componentWillUnmountSpy: SinonSpy;
  const events = { click: () => {}, mouseover: () => {} };

  beforeEach(() => {
    testBlock = new TestBlock({ events });
    initSpy = spy(testBlock, 'init');
    renderSpy = spy(testBlock, 'render');
    componentDidMountSpy = spy(testBlock, 'componentDidMount');
    componentDidUpdateSpy = spy(testBlock, 'componentDidUpdate');
    componentWillUnmountSpy = spy(testBlock, 'componentWillUnmount');
  });

  afterEach(() => {
    testBlock.destroy();
    restore();
  });

  describe('interaction with events', () => {
    it('should register INIT event', () => {
      testBlock.init();

      expect(initSpy.calledOnce).to.be.true;
    });

    it('should register RENDER event', () => {
      testBlock.render();

      expect(renderSpy.calledOnce).to.be.true;
    });

    it('should register COMPONENT DID MOUNT event', () => {
      testBlock.componentDidMount();

      expect(componentDidMountSpy.calledOnce).to.be.true;
    });

    it('should register COMPONENT DID UPDATE event', () => {
      testBlock.componentDidUpdate({}, {});

      expect(componentDidUpdateSpy.calledOnce).to.be.true;
    });

    it('should emit INIT event when component initialized', () => {
      testBlock.init();

      expect(initSpy.calledOnce).to.be.true;
    });

    it('should emit RENDER event when init is complete', () => {
      testBlock.init();
      testBlock.render();

      expect(renderSpy.calledOnce).to.be.true;
    });

    it('should emit COMPONENT DID MOUNT event when render is complete', () => {
      testBlock.init();
      testBlock.render();
      testBlock.componentDidMount();

      expect(componentDidMountSpy.calledOnce).to.be.true;
    });

    it('should emit COMPONENT DID UPDATE event when setting props', () => {
      testBlock.componentDidUpdate({}, {});

      expect(componentDidUpdateSpy.calledOnce).to.be.true;
    });

    it('should emit COMPONENT WILL UNMOUNT event when component is unmounted', () => {
      testBlock.destroy();

      expect(componentWillUnmountSpy.calledOnce).to.be.true;
    });
  });

  it('should update props when setProps is called', () => {
    const newProps = { someProp: 'new value' };
    testBlock.setProps(newProps);

    expect(testBlock.publicProps).to.deep.equal({ events, ...newProps });
  });

  it('should return the content of the element', () => {
    expect(testBlock.getContent()?.textContent).to.equal('Hello, World!');
  });

  it('should return the correct markup', () => {
    testBlock.render = () => '<div>Test Render</div>';

    const renderedMarkup = testBlock.render();

    expect(renderedMarkup).to.equal('<div>Test Render</div>');
  });

  describe('destroy', () => {
    it('should remove event listeners when called', () => {
      const removeEventListenerSpy = spy(testBlock.element as HTMLElement, 'removeEventListener');

      testBlock.destroy();

      expect(removeEventListenerSpy.callCount).to.be.greaterThan(0);
    });

    it('should delete DOM elements when called', () => {
      const removeElementSpy = spy(testBlock.element as HTMLElement, 'remove');

      testBlock.destroy();

      expect(removeElementSpy.callCount).to.equal(1);
    });
  });
});
