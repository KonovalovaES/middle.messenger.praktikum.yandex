import Block from '../../core/Block/Block';
import template from './template';

import type IMembersRemoveItem from './types/types';
import modalsController from '../../controllers/ModalsController';

export default class MembersRemoveItem extends Block<IMembersRemoveItem.Props> {
  constructor(props: IMembersRemoveItem.Props) {
    super(props);

    this.props.events = {
      click: () => {
        modalsController.setUserToRemove(this.props.id);
        modalsController.switchRemoveUser();
        modalsController.switchMembers();
      },
    };
  }
  render() {
    return template;
  }
}
