// language=hbs
export default `
  <li class='form-field' ref={{ ref }}>
      <label class='form-field__label'>
          {{ title }}
          {{{ Input
            className='form-field__input'
            name=name
            type=type
            onBlur=onBlur
            onChange=onChange
            ref='input'
          }}}
          {{{ ErrorMessage text=errorText ref='errorText' }}}
      </label>
  </li>
`;
