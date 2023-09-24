import Handlebars from 'handlebars';

import Block from './Block';

// eslint-disable-next-line no-duplicate-imports
import type { HelperOptions } from 'handlebars';
import type { BaseProps } from './types/types';

const registerComponent = <Props extends BaseProps = BaseProps>(
  name: string,
  Component: new (props: Props) => Block<Props>,
) => {
  if (name in Handlebars.helpers) {
    throw `Компонент с именем "${name}" уже зарегистрирован`;
  }

  Handlebars.registerHelper(name, function(this: unknown, { hash, data, fn }: HelperOptions) {
    const component = new Component(hash);
    const dataAttribute = `data-id="${component.id}"`;

    if ('ref' in hash) {
      (data.root.__refs = data.root.__refs || {})[hash.ref] = component;
    }

    (data.root.__children = data.root.__children || []).push({
      component,
      embded(fragment: DocumentFragment) {
        const stub = fragment.querySelector(`[${dataAttribute}]`);

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      },
    });

    const contents = fn ? fn(this) : '';

    return `<div ${dataAttribute}>${contents}</div>`;
  });
};

export default registerComponent;
