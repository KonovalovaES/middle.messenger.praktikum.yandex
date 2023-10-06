// language=hbs
export default `
  <div class='footer footer_chat' ref='ref'>
    {{{ FormWithoutButtons
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
