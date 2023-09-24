// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_max'>
    {{{ ChatsPanel ref='chatPanel' chats=chats search=search onSearch=onSearch }}}
    {{{ ChatSpace ref='chatSpace'
      open_chat_id=open_chat_id
      users=users
      chat=chat
      showMembersMenu=showMembersMenu
      showFilesMenu=showFilesMenu
      showRemoveUserModal=showRemoveUserModal
      showAddUserModal=showAddUserModal
      fields=fields
      showMembers=showMembers
      users=users
      showAvatarLoadModal=showAvatarLoadModal
      showAvatarLoadModal=showAvatarLoadModal
      open_chat_id=open_chat_id
      onSend=onSend
      onAddUser=onAddUser
    }}}
    {{# if showCreateChatModal }}
      {{{ Modal
        title='Создать чат'
        buttonTitle='Создать'
        text='Введите название чата'
        fields=fields
        onAction=onCreateChat
        onCancel=onCancel
        ref='createChatModal'
      }}}
    {{ else }}
      {{# if showRemoveChatModal }}
        {{{ Modal
          title='Удалить чат'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить историю сообщений?'
        }}}
      {{/if}}
    {{/if}}
  </main>
`;
