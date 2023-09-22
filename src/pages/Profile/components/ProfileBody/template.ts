// language=hbs
export default `
  <div class='body body_profile' ref={{ ref }}>
    {{# each fields }}
      {{{ ProfileItem
        label=this.label
        placeholder=this.placeholder
        name=this.name
        type=this.type
        editPassword=../editPassword
        editProfile=../editProfile
        ref=this.ref
        value=this.value
        text=this.errorText
        validate=this.validate
      }}}
    {{/each}}
  </div>
`;
