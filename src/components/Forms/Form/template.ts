// language=hbs
export default `
  <form class='form' ref={{ ref }}>
    <div class='form__header'>
      <h3 class='form__title'>{{ title }}</h3>
    </div>
    <div class='form__body'>
      {{# if text }}
        <p class='form__text'>{{ text }}</p>
      {{/if}}
      {{# if fields }}
        <ul class='form__fields-list'>
          {{# each fields }}
            {{{ FormInput
              title=this.label
              type=this.type
              name=this.name
              errorText=this.errorText
              validate=this.validate
              ref=this.ref
            }}}
          {{/ each }}
        </ul>
      {{/if}}
      {{# if imgLoad }}
        {{{ ImageInput
          withAddIcon=true
          withRemoveIcon=(or avatar '')
          avatar=avatar
          errorText=errorText
          onChange=onAvatarChange
        }}}
      {{/if}}
    </div>
    <div class='form__footer'>
      {{# if mainButtonTitle }}
        {{{ Button
          type='primary'
          title=mainButtonTitle
          className='modal-width'
          onClick=onMainButtonClick
        }}}
      {{/if}}
      {{{ Button
        type='link'
        title=additionalButtonTitle
        className='modal-width'
        onClick=onAdditionalButtonClick
      }}}
    </div>
  </form>
`;
