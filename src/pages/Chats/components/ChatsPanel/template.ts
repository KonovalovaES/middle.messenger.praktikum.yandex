// language=hbs
export default `
  <div class='chat-panel' ref={{ ref }}>
    <div class='chat-panel__header'>
      {{{ FormWithoutButtons
        ref='searchForm'
        refInput='searchInput'
        onChange=onSearch
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
        onClick=openCreateChatModal
      }}}
      {{{ IconButton
        class='button_panel'
        title='Профиль'
        icon='AngleRightIcon'
        iconClass='icon_blue'
        onClick=goToProfile
      }}}
    </div>
    {{{ ChatList }}}
      {{# if isCreateChatModalOpen }}
        {{{ Modal
          title='Создать чат'
          buttonTitle='Создать'
          text='Введите название чата'
          fields=newChatFields
          onAction=createChat
          onCancel=openCreateChatModal
          ref='createChatModal'
        }}}
      {{/ if }}
  </div>
`;
