import Block from '../../../core/Block/Block';
import template from './template';
// import connect from '../../../core/Store/connect';

import type IFormWithoutButtons from './types/types';
// import type { IStore } from '../../../core/Store/types/types';

import './style.scss';

class FormWithoutButtons extends
  Block<IFormWithoutButtons.Props, IFormWithoutButtons.Refs> {
  constructor(props: IFormWithoutButtons.Props) {
    super(props);

    this.props.events = {
      submit: this.props.onSubmit || ((event: Event) => {
        event.preventDefault();
      }),
    };
  }

  get value() {
    return (Object.values(this.refs)[0].element as HTMLInputElement).value;
  }

  clear() {
    (Object.values(this.refs)[0].element as HTMLInputElement).value = '';
  }

  render(): string {
    return template;
  }
}

// const mapStateToProps = (state: IStore) => ({  });

// export default connect(FormWithoutButtons, mapStateToProps);
export default FormWithoutButtons;
