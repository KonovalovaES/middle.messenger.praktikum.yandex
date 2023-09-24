// language=hbs
export default `
  <ul class='chat-list'>
    {{# each chats }}
      {{{ ChatItem
        id=this.id
        title=this.title
        outgoing=(isCurrentUser this.last_message.user.login)
        content=this.last_message.content
        time=this.last_message.time
        unread_count=this.unread_count
        from=this.last_message.user.first_name
        user_avatar=this.last_message.user.avatar
        login=this.last_message.user.login
        search=../search
        open_chat_id=../open_chat_id
      }}}
    {{/ each }}
  </ul>
`;
