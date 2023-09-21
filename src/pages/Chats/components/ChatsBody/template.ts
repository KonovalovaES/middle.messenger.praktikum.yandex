// language=hbs
export default `
  <div class='body body_chat'>
    {{# each messageGroupsOrder }}
      <div class='chat__date'>{{ getDate this }}</div>
      {{# each (getMessagesAtDate ../messageGroups this) }}
        {{{ Message
          content=this.content
          time=this.time
          outgoing=(isCurrentUser this.user.login)
          author=this.user.display_name
          img=this.img
        }}}
      {{/ each }}
    {{/ each }}
  </div>
`;
