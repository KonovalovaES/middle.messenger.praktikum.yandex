// language=hbs
export default `
  <div class='chat-space{{# if (isAnyChatOpen openChatId) }} chat-space_with-chat{{
  else }} chat-space_without-chat{{/ if }}'>
    {{# if openChatId }}
      {{{ Chat
        ref='chat'
        avatar=(getChatAvatar openChatId)
        title=(getChatTitle openChatId)
        users=users
      }}}
    {{ else }}
      {{{ WithoutChat }}}
    {{/ if }}
  </div>
`;
