// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_profile'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    {{{ IconButton
      class='button_chats'
      title='Чаты'
      icon='AngleLeftIcon'
      iconClass='icon_blue'
      onClick=goToChats
    }}}
    <form class='profile'>
      {{{ ProfileHeader }}}
      {{{ ProfileBody ref='profileData' }}}
      {{{ ProfileFooter
        onSave=onSave
        onExit=onExit
        onEditProfile=onEditProfile
        onEditPassword=onEditPassword
        onSaveProfile=onSaveProfile
        onSavePassword=onSavePassword
      }}}
    </form>
    {{# if isExitModalOpen }}
      {{{ Modal
        title='Выход'
        buttonTitle='Выйти'
        text='Вы действительно хотите выйти из профиля?'
        onCancel=onExit
        onAction=logout
      }}}
    {{/ if }}
  {{/ if }}
  </main>
`;
