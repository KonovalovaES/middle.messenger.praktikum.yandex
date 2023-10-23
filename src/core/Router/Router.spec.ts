import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import Block from '../Block/Block';
import router from './Router';

import { PAGES } from '../../consts';

class TestBlock extends Block {}

describe('Router', () => {
  const messengerPath = PAGES.messenger;
  const settingsPath = PAGES.settings;

  beforeEach(() => {
    router.use(messengerPath, TestBlock);
    router.use(settingsPath, TestBlock);
  });

  it('should initialize the router and set the initial route', () => {
    const messengerPath = PAGES.messenger;

    window.history.pushState({}, 'Test', messengerPath);

    router.start();

    expect(router.route?.path).to.equal(messengerPath);
  });

  it('should update the window`s pathname if a transition was called', () => {
    router.go(PAGES.settings);

    expect(window.location.pathname).to.equal(PAGES.settings);
  });

  it('should return undefined if it isn`t registered', () => {
    expect(router.getRoute('/not-registered')).to.be.undefined;
  });

  it('should return a route if pathname is empty', () => {
    router.use('/404', TestBlock);

    expect(router.getRoute('')).not.to.be.undefined;
  });

  it('should return a route if it is registered', () => {
    router.use(PAGES.settings, TestBlock);

    expect(router.getRoute(PAGES.settings)).not.to.be.undefined;
  });
});
