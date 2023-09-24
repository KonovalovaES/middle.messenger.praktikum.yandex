// language=hbs
export default `
  <li class='chat-item{{# if (isChatActive id open_chat_id) }} chat-item_active{{/ if }}'>
    <div class='chat-item__divider'/> 
    <div class='chat-item__body'>
      {{{ Avatar
        avatar=avatar
        user_avatar=user_avatar
      }}}
      {{{ Content
        search=search
        title=title
        login=login
        from=from
        content=content
      }}}
      {{{ Info
        search=search
        time=time
        unread_count=unread_count
      }}}
    </div>
    <div class='chat-item__divider'/>
  </li>
`;
