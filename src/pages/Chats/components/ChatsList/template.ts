// language=hbs
export default `
  <ul class='chat-list'>
    {{# each chats }}
      {{{ ChatItem 
        id=this.id
        avatar=this.avatar
        user_avatar=this.last_message.user.avatar
        title=this.title
        login=this.last_message.user.login
        content=this.last_message.content
        time=this.last_message.time
      }}}
    {{/ each }}
  </ul>
`;
