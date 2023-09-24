// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_login'>
    {{{ Form
      title='Вход'
      mainButtonTitle='Авторизоваться'
      additionalButtonTitle='Нет аккаунта?'
      fields=fields
      onMainButtonClick=onLogin
      ref='loginForm'
      onSubmit=onLogin
    }}}
  </main>
`;
