// language=hbs
export default `
  <div class='chat-wrapper' ref='chat'>
    {{{ ChatHeader }}}
    <div class='chat-space__divider'></div>
    {{# if isChatMenuOpen }}
      {{{ MembersMenu }}}
    {{/ if }}
    {{{ ChatBody }}}
    <div class='chat-space__divider'></div>
    {{{ ChatFooter ref='chatFooter' }}}
    {{# if isAddUserModalOpen }}
      {{{ Modal
        title='Добавить пользователя'
        buttonTitle='Добавить'
        label='Логин'
        inputName='add'
        fields=addUserFields
        ref='addUserModal'
        onAction=addUser
        onCancel=closeAddUserModal
      }}}
      {{/ if }}
      {{# if isRemoveUserModalOpen }}
        {{{ Modal
          title='Удалить пользователя'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить пользователя из чата?'
          onCancel=closeRemoveUserModal
          onAction=removeUser
        }}}
      {{/ if }}
      {{# if isAvatarLoadModalOpen }}
        {{{ Modal
          title='Изменить аватар чата'
          imgLoad=true
          errorText='Ошибка, попробуйте еще раз'
          avatar=avatar
          onCancel=closeAvatarLoadModal
          onAvatarChange=onAvatarChange
        }}}
      {{/ if }}
      {{# if isRemoveChatModalOpen }}
        {{{ Modal
          title='Удалить чат'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить чат? Это действие нельзя отменить'
          onCancel=closeRemoveChatModal
          onAction=removeChat
        }}}
      {{/ if }}
  </div>
`;
