// language=hbs
export default `
  <form class='form_without-buttons' ref={{ ref }}>
    {{{ TextInput
      className=className
      placeholder=placeholder
      value=value
      name=name
      type='text'
      ref=refInput
    }}}
  </form>
`;
