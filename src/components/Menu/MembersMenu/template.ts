// language=hbs
export default `
  <div class='menu menu_members'>
    {{{ MenuItem
      icon='PhotoIcon'
      iconClass='icon_blue'
      text='Изменить аватар чата'
      onClick=onChangeAvatar
    }}}
    {{# if isAdmin }}
      {{{ MenuItem
        icon='TrashIcon'
        iconClass='icon_blue'
        text='Удалить чат'
        onClick=onRemoveChatHistory
      }}}
    {{/ if }}
  </div>
`;

