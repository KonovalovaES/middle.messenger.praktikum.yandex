// language=hbs

export default `
  <li class='chat-item{{# if (isChatActive id openChatId) }} chat-item_active{{/ if }}'>
    <div class='chat-item__divider'/> 
    <div class='chat-item__body'>
      {{{ Avatar avatar=avatar user_avatar=user.avatar }}}
      {{{ Content
        id=id
        title=title
        login=login
        content=content
      }}}
      {{{ Info time=time id=id }}}
    </div>
    <div class='chat-item__divider'>
  </li>
`;
