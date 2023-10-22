import Handlebars from 'handlebars';
import { v4 as uuidv4 } from 'uuid';

import EventBus from '../EventBus/EventBus';
import { customHasOwnProperty } from '../../utils/helpers';

import type {
  Child,
  BaseProps,
  RefsType,
  PropsWithEvents,
  ContextType,
  Events,
} from '../types/types';

abstract class Block <Props extends BaseProps = BaseProps, Refs extends RefsType = RefsType> {
  static readonly EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  };

  id = uuidv4();
  protected props: PropsWithEvents<Props> = {
    events: {} as Events,
  };
  protected refs: Refs = {} as Refs;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  constructor(props: Props) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy({ events: this.props.events, ...props }, this);
    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _addEventListeners() {
    const { events = {} } = this.props;

    if (!this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      if (customHasOwnProperty(events, eventName)) {
        this._element?.addEventListener(eventName, events[eventName]);
      }
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _checkInDom() {
    const elementInDom = document.body.contains(this._element);

    if (elementInDom) {
      setTimeout(() => this._checkInDom(), 1000);

      return;
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CWU, this.props);
  }

  private _componentDidMount() {
    this._checkInDom();
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: unknown, _newProps: unknown) {
    return true;
  }

  setProps = (nextProps: unknown) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this._compile(this.render(), this.props);

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEventListeners();
  }

  private _compile(template: string, context: PropsWithEvents) {
    const contextAndStubs: ContextType = { ...context, __refs: this.refs };

    const html = Handlebars.compile(template)(contextAndStubs);

    const templateElement = document.createElement('template');

    templateElement.innerHTML = html;

    (contextAndStubs.__children as Child[])?.forEach(({ embded }) => {
      embded(templateElement.content);
    });

    return templateElement.content;
  }

  render(): string {
    return '';
  }

  getContent() {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.dispatchComponentDidMount();
        }
      }, 100);
    }

    return this.element;
  }

  private _makePropsProxy(props: PropsWithEvents<Props>, self: Block) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop.toString()];

        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };

        target[prop as keyof PropsWithEvents<Props>] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _unmountComponent() {
    if (this._element) {
      this._componentWillUnmount();
      this._removeListeners();
    }
  }

  private _componentWillUnmount() {
    this.componentWillUnmount();
  }

  protected componentWillUnmount() {}

  private _removeListeners() {
    const { events } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  destroy() {
    this._unmountComponent();

    if (this.element) {
      this.element.remove();
    }
  }
}

export default Block;
