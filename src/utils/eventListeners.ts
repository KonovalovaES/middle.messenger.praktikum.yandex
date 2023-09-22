/* eslint-disable func-style  */
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import Chats from '../pages/Chats';
import Profile from '../pages/Profile';

export function onAddUser(this: Chats, event: Event) {
  event.preventDefault();

  const { newUserName } = this.refs.chatSpace;

  if (newUserName.trim()) {
    console.log({ newUserName });
  }
}

export function onCreateChat(this: Chats, event: Event) {
  event.preventDefault();

  const { newChatName } = this.refs.createChatModal;

  if (newChatName.trim()) {
    console.log({ newChatName });
  }
}

export function onSearch(this: Chats, event: Event) {
  event.preventDefault();

  const { searchString: search } = this.refs.chatPanel;

  if (search.trim()) {
    console.log({ search });
  }
}

export function onSend(this: Chats, event: Event) {
  event.preventDefault();

  const { message } = this.refs.chatSpace;

  if (message.trim()) {
    console.log({ message });
  }
}

export function onLogin(this: Login, event: Event) {
  event.preventDefault();

  const { values } = this.refs.loginForm;

  for (const value of values) {
    if (!Object.values(value)[0]) {
      return;
    }
  }

  console.log(values);
}

export function onSignin(this: Signin, event: Event) {
  event.preventDefault();

  const { values } = this.refs.signinForm;

  for (const value of values) {
    if (!Object.values(value)[0]) {
      return;
    }
  }

  console.log(values);
}

export function onSave(this: Profile, event: Event) {
  event.preventDefault();

  const { values } = this.refs.profileData;

  if (values.length > 0) {
    console.log(values);
  }
}
