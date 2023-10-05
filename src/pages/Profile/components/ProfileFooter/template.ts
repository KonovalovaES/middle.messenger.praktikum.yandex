// language=hbs
export default `
  <div class='footer footer_profile {{# if (or isEditProfileOpen isEditPasswordOpen) }}edit{{/if}}'>
    {{# if (or isEditProfileOpen isEditPasswordOpen) }}
      {{{ Button
        type='primary'
        title='Сохранить'
        className='max-width'
        onClick=(getFunction isEditProfileOpen onSaveProfile isEditPasswordOpen onSavePassword)
      }}}
      {{{ Button
        type='link'
        title='Отменить'
        className='max-width'
        onClick=(getFunction isEditProfileOpen onEditProfile isEditPasswordOpen onEditPassword)
      }}}
    {{ else }}
      {{{ IconButton
        class='footer__button'
        title='Изменить данные'
        icon='PencilIcon'
        iconClass='icon_blue icon_large'
        onClick=onEditProfile
      }}}
      {{{ IconButton
        class='footer__button'
        title='Изменить пароль'
        icon='LockIcon'
        iconClass='icon_blue icon_large'
        onClick=onEditPassword
      }}}
      {{{ IconButton
        class='footer__button'
        title='Выйти из профиля'
        icon='ExitIcon'
        iconClass='icon_blue icon_large'
        onClick=onExit
      }}}
    {{/if}}
  </div>
`;
