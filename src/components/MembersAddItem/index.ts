import Block from '../../core/Block/Block';
import template from './template';
import modalsController from '../../controllers/ModalsController';

import type IMembersAddUserModal from './types/types';

export default class MembersAddItem extends Block<IMembersAddUserModal.Props> {
  constructor(props: IMembersAddUserModal.Props) {
    super(props);

    this.props.events = {
      click: () => {
        modalsController.switchAddUser();
        modalsController.switchMembers();
      },
    };
  }
  render() {
    return template;
  }
}
