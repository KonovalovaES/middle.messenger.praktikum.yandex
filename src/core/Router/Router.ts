import Route from './Route/Route';
import Block from '../Block/Block';

import type { BaseProps } from '../types/types';
import type { PAGES } from '../../consts';

class Router {
  routes: Route[] = [];
  history = window.history;
  private _currentRoute: Route | null = null;
  private readonly _rootQuery: string;

  constructor(rootQuery: string) {
    this._rootQuery = rootQuery;
  }

  use<Props extends  BaseProps>(
    pathname: string,
    block: new (props: Props) => Block,
    props?: Props,
  ) {
    const route = new Route(pathname, block, { ...props, rootQuery: this._rootQuery });

    this.routes.push(route as Route);

    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      return this._onRoute((event.currentTarget as typeof window)?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return ;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: PAGES) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    const route =  this.routes.find((route) => route.match(pathname));

    if (!route) {
      return this.routes.find((route) => route.match('/404'));
    }

    return route;
  }

  get route() {
    return this._currentRoute;
  }
}

export default new Router('#app');
