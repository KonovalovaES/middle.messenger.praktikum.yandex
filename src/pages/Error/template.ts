// language=hbs
export default `
  <main class='wrapper wrapper_max wrapper_error'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    <h1 class='error__code'>{{ code }}</h1>
      {{ getIcon icon 'icon_blue icon_big' }}
    <p class='error__message'>{{ message }}</p>
    {{{ IconButton
      class='back-button'
      icon='AngleLeftIcon'
      iconClass='icon_blue'
      text='Вернуться на главную'
      onClick=goToChats
    }}}
      {{/ if }}
  </main>
`;
