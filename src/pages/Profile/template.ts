// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_profile'>
    {{{ IconButton
      class='button_chats'
      title='Чаты'
      icon='AngleLeftIcon'
      iconClass='icon_blue'
    }}}
    <form class='profile'>
      {{{ ProfileHeader user=user editProfile=editProfile }}}
      {{{ ProfileBody ref='profileData' fields=fields
              user=user editProfile=editProfile editPassword=editPassword }}}
      {{{ ProfileFooter
              editProfile=editProfile editPassword=editPassword onSave=onSave onCancel=onCancel }}}
    </form>
    {{# if exit }}
      {{{ Modal
        title='Выход'
        buttonTitle='Выйти'
        text='Вы действительно хотите выйти из профиля?'
      }}}
    {{/ if }}
  </main>
`;
