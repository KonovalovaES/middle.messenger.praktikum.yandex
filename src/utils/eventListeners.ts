/* eslint-disable func-style  */
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import Chats from '../pages/Chats';
import Profile from '../pages/Profile';

export function onAddUser(this: Chats, event: Event) {
  event.preventDefault();

  console.log({ newUserName: this.refs.chatSpace.newUserName[1] });
}

export function onCreateChat(this: Chats, event: Event) {
  event.preventDefault();

  console.log({ newChatName: this.refs.createChatModal.newChatName[1] });
}

export function onSearch(this: Chats, event: Event) {
  event.preventDefault();

  console.log({ search: this.refs.chatPanel.searchSting });
}

export function onSend(this: Chats, event: Event) {
  event.preventDefault();

  if (this.isMessageValid) {
    console.log({ message: this.refs.chatSpace.message });
  }
}

export function onLogin(this: Login, event: Event) {
  event.preventDefault();


  console.log(this.refs.loginForm.values);
}

export function onSignin(this: Signin, event: Event) {
  event.preventDefault();

  console.log(this.refs.signinForm.values);
}

export function onSave(this: Profile, event: Event) {
  event.preventDefault();

  console.log(this.refs.profileData.values);
}
