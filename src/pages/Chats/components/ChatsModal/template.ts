// language=hbs
export default `
  <div class='wrapper wrapper_max wrapper_modal'>
    {{{ Form
      ref=ref
      title=title
      mainButtonTitle=buttonTitle
      additionalButtonTitle='Отменить'
      text=text
      imgLoad=imgLoad
      avatar=avatar
      errorText=errorText
      fields=fields
      onMainButtonClick=onAction
      onAdditionalButtonClick=onCancel
      onAvatarChange=onAvatarChange
    }}}
  </div>
`;
