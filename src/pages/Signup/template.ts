// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_signup'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    {{{ Form
      title='Регистрация'
      mainButtonTitle='Зарегистрироваться'
      additionalButtonTitle='Войти'
      fields=fields
      onMainButtonClick=onSignup
      onAdditionalButtonClick=goToLogin
      ref='signupForm'
      onSubmit=onSignup
    }}}
  {{/ if }}
  </main>
`;
