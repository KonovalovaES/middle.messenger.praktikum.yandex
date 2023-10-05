// language=hbs
export default `
  <div class='header header_chat'>
    {{{ ChatInfo unreadCount=unreadCount }}}
    {{{ IconButton
      class='chat-space__menu'
      title='Настройки'
      icon='EllipsisIcon'
      iconClass='icon_blue'
      onClick=openChatMenu
    }}}
    {{# if isMembersOpen }}
      {{{ MembersModal }}}
    {{/ if }}
  </div>
`;
