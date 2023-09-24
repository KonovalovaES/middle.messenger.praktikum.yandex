import type { CallBack } from './types/types';

export default class EventBus<Event extends string = string, Listener extends CallBack = CallBack> {
  listeners: Record<Event, Listener[]> = {} as Record<Event, Listener[]>;

  on(event: Event, cb: Listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(cb);
  }

  off(event: Event, cb: Listener) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== cb);
  }

  emit(event: Event, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => listener(...args));
  }
}
