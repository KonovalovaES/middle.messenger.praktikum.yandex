// language=hbs
export default `
  <div class='chat-panel' ref={{ ref }}>
    <div class='chat-panel__header'>
      {{{ FormWithoutButtons
        search=search
        ref='searchForm'
        refInput='searchInput'
        onSubmit=onSearch
        className='input_chat input_search'
        placeholder='Поиск'
        value=search
        name='search'
      }}}
      {{{ IconButton
        class='button_panel'
        title='Создать чат'
        icon='PenIcon'
        iconClass='icon_blue'
      }}}
      {{{ IconButton
        class='button_panel'
        title='Профиль'
        icon='AngleRightIcon'
        iconClass='icon_blue'
      }}}
    </div>
    {{# if search }}
        {{{ ChatList search=search chats=(filterChats chats search) }}}
    {{ else }}
        {{{ ChatList search=search chats=chats }}}
    {{/if}}
  </div>
`;
