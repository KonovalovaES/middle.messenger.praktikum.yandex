// language=hbs
export default `
  <div class='chat-wrapper' ref='chat'>
    {{{ ChatHeader
      avatar=avatar
      title=title
      users=users
      members=members
      showMembers=showMembers
    }}}
    <div class='chat-space__divider'></div>
    {{# if showMembersMenu }}
      {{{ MembersMenu }}}
    {{/ if }}
    {{{ ChatBody messageGroupsOrder=messageGroupsOrder messageGroups=messageGroups }}}
    <div class='chat-space__divider'></div>
    {{{ ChatFooter showFilesMenu=showFilesMenu ref='chatFooter' onSend=onSend }}}
    {{# if showAddUserModal }}
      {{{ Modal
        title='Добавить пользователя'
        buttonTitle='Добавить'
        label='Логин'
        inputName='add'
        fields=fields
        ref='addUserModal'
        onAction=onAddUser
      }}}
    {{ else }}
      {{# if showRemoveUserModal }}
        {{{ Modal
          title='Удалить пользователя'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить пользователя из чата?'
        }}}
      {{ else }}
        {{# if showAvatarLoadModal }}
          {{{ Modal
            title='Изменить аватар чата'
            buttonTitle='Сохранить'
            imgLoad=true
            errorText='Ошибка, попробуйте еще раз'
            avatar=avatar
          }}}
        {{/ if }}
      {{/ if }}
    {{/ if }}
  </div>
`;
