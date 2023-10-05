import store from '../core/Store/Store';

class ModalsController {
  switchChatMenu() {
    if (store.state.modals?.isMembersOpen && !store.state.modals?.isChatMenuOpen) {
      store.set('modals.isMembersOpen', !store.state.modals?.isMembersOpen);
    }

    store.set('modals.isChatMenuOpen', !store.state.modals?.isChatMenuOpen);
  }

  switchMembers() {
    if (store.state.modals?.isChatMenuOpen && !store.state.modals?.isMembersOpen) {
      store.set('modals.isChatMenuOpen', !store.state.modals?.isChatMenuOpen);
    }

    store.set('modals.isMembersOpen', !store.state.modals?.isMembersOpen);
  }

  closeRemoveChat() {
    store.set('modals.isRemoveChatModalOpen', false);
  }

  closeAvatarLoad() {
    store.set('modals.isAvatarLoadModalOpen', false);
  }

  closeAddUser() {
    store.set('modals.isAddUserModalOpen', false);
  }

  closeRemoveUser() {
    store.set('modals.isRemoveUserModalOpen', false);
  }

  switchExit() {
    store.set('modals.isExitModalOpen', !store.state.modals?.isExitModalOpen);
  }

  switchEditProfile() {
    store.set('modals.isEditProfileOpen', !store.state.modals?.isEditProfileOpen);
  }

  switchEditPassword() {
    store.set('modals.isEditPasswordOpen', !store.state.modals?.isEditPasswordOpen);
  }

  switchCreateChat() {
    store.set('modals.isCreateChatModalOpen', !store.state.modals?.isCreateChatModalOpen);
  }

  switchFileMenu() {
    store.set('modals.isFilesMenuOpen', !store.state.modals?.isFilesMenuOpen);
  }

  switchAvatarLoad() {
    store.set('modals.isAvatarLoadModalOpen', !store.state.modals?.isAvatarLoadModalOpen);
  }

  switchRemoveChat() {
    store.set('modals.isRemoveChatModalOpen', !store.state.modals?.isRemoveChatModalOpen);
  }

  switchAddUser() {
    store.set('modals.isAddUserModalOpen', !store.state.modals?.isAddUserModalOpen);
  }

  switchRemoveUser() {
    store.set('modals.isRemoveUserModalOpen', !store.state.modals?.isRemoveUserModalOpen);
  }

  setSearch(text: string) {
    store.set('search', text.trim());
  }

  closeAll() {
    store.set('modals', void 0);
  }

  setUserToRemove(userId: number) {
    store.set('chat.toRemove', userId);
  }
}

export default new ModalsController();
