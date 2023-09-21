// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_signin'>
    {{{ Form
      title='Регистрация'
      mainButtonTitle='Зарегистрироваться'
      additionalButtonTitle='Войти'
      fields=fields
      onMainButtonClick=onSignin
      ref='signinForm'
    }}}
  </main>
`;
