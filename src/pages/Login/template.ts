// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_login'>
    {{# if loading }}
      {{{ Loader }}}
    {{ else }}
      {{{ Form
        title='Вход'
        mainButtonTitle='Авторизоваться'
        additionalButtonTitle='Нет аккаунта?'
        fields=fields
        onMainButtonClick=onLogin
        onAdditionalButtonClick=goToSignup
        ref='loginForm'
        onSubmit=onLogin
      }}}
    {{/if}}
  </main>
`;
