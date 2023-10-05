// language=hbs
export default `
  <div class='body body_chat' id='chat_body'>
    {{# each (normalizeMessageGroupsOrder (getGroupMessagesByDate messages)) }}
      {{# each (getMessagesAtDate (getGroupMessagesByDate ../messages) this) }}
        {{{ Message
          content=this.content
          time=this.time
          outgoing=(isCurrentUserById this.user_id)
          author=(getNameById this.user_id)
          img=this.img
          avatar=(getUserAvatar this.user_id)
        }}}
      {{/ each }}
        <div class='chat__date'>{{ getDate this }}</div>
    {{/ each }}
  </div>
`;

