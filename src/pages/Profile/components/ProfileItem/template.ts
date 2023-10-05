// language=hbs
export default `
  <div class='item'>
    <div class='item__data'>
      <span class='item__label'>{{ label }}</span>
      {{# if (or isEditProfileOpen isEditPasswordOpen) }}
        {{{ TextInput
          className='item__value'
          value=value
          name=name
          type=type
          ref='input'
          onBlur=onBlur
          validate=validate
          placeholder=placeholder
        }}}
      {{ else }}
        <span class='item__value'>{{ value }}</span>
      {{/if}}
    </div>
      <div class='item__divider'></div>
      {{{ ErrorMessage text=errorText ref='errorText' className='error_min' }}}
  </div>
`;
