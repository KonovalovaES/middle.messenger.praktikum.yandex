// language=hbs
export default `
  <div class='body body_profile' ref={{ ref }}>
    {{# if isEditPasswordOpen }}
      {{{ ProfileItem
        label='Старый пароль'
        placeholder='Старый пароль'
        name='old_password'
        type='password'
        ref='oldPassword'
        text=errorText
        validate=passwordValidate
      }}}
      {{{ PasswordItems ref='newPassword' }}}
    {{ else }}
      {{{ ProfileItem
        label='Почта'
        placeholder='Почта'
        name='email'
        type='email'
        ref='email'
        value=email
        text=errorText
        validate=emailValidate
      }}}
      {{{ ProfileItem
        label='Логин'
        placeholder='Логин'
        name='login'
        type='text'
        ref='login'
        value=login
        text=errorText
        validate=loginValidate
      }}}
      {{{ ProfileItem
        label='Имя'
        placeholder='Имя'
        name='first_name'
        type='text'
        ref='first_name'
        value=first_name
        text=errorText
        validate=nameValidate
      }}}
      {{{ ProfileItem
        label='Фамилия'
        placeholder='Фамилия'
        name='second_name'
        type='text'
        ref='second_name'
        value=second_name
        text=errorText
        validate=nameValidate
      }}}
      {{{ ProfileItem
        label='Имя в чате'
        placeholder='Имя в чате'
        name='display_name'
        type='text'
        ref='display_name'
        value=display_name
        text=errorText
        validate=namealidate
      }}}
      {{{ ProfileItem
        label='Телефон'
        placeholder='Телефон'
        name='phone'
        type='tel'
        ref='phone'
        value=phone
        text=errorText
        validate=phoneValidate
      }}}
    {{/if}}
  </div>
`;
