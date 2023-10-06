// language=hbs
export default `
  <div>
    {{{ ProfileItem
      label='Новый пароль'
      placeholder='Новый пароль'
      name='new_password'
      type='password'
      ref='new_password'
      text=errorText
      validate=passwordValidate
      onBlur=onPasswordBlur
    }}}
    {{{ ProfileItem
      label='Новый пароль (повтор)'
      placeholder='Новый пароль'
      name='repeat_new_password'
      type='password'
      ref='repeat_new_password'
      text=errorText
      validate=repeatPasswordValidate
      onBlur=onRepeatPasswordBlur
    }}}
  </div>
`;
