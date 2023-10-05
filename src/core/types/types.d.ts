import type Block from '../Block/Block';

type EventName = 'click' | 'blur';

type Events = Record<Partial<EventName, CallBack[]>>;

export type CallBack = (...args: unknown[]) => void;
export type BaseProps = Record<string, unknown>;

export interface PropsWithEvents<P extends BaseProps = Base> extends P {
  events: Events;
}

export type RefsType = Record<string, HTMLElement | Block>;

export interface Child {
  component: typeof Block;
  embded: (node: DocumentFragment) => void;
}

export interface ContextType<R extends RefsType = RefsType> extends PropsWithEvents {
  __refs: R;
  __children?: Child[];
}
