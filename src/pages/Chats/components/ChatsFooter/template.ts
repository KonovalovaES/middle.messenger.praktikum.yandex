// language=hbs
export default `
  <div class='footer footer_chat' ref='ref'>
    {{{ IconButton
      class='chat-space__file'
      icon='PaperclipIcon'
      iconClass='icon_blue icon_large'
    }}}
    {{# if showFilesMenu }}
      {{{ FilesMenu }}}
    {{/ if }}
    {{{ FormWithoutButtons
      search=search
      ref='messageForm'
      refInput='messageInput'
      onSubmit=onSend
      className='input_chat input_message'
      placeholder='Сообщение'
      value=search
      name='message'
    }}}
    {{{ IconButton
      class='chat-space__button'
      icon='SearchIcon'
      iconClass='icon_light'
      onClick=onSend
    }}}
  </div>
`;
