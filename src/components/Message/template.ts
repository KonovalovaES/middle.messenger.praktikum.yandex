// language=hbs
export default `
    <div class='message_wrapper {{# if outgoing }}outgoing{{ else }}incoming{{/ if }}'>
    {{# unless outgoing }}
        {{{ ImagePreview img=avatar imgClass='mini' }}}
    {{/unless}}
    <div class='message message_{{ getMessageClass outgoing }}'>
      {{# unless outgoing }}
          <div class='message__author'>{{ author }}</div>
      {{/ unless }}
      <div class='message__content {{ getMessageClass outgoing }}'>
        {{ content }}
        {{# if img }}
          <img src='{{ createHref img }}' alt='Изображение' class='message__image'/>
        {{/if}}
        <div class='message__time'>{{ getMessageTime time }}</div>
      </div>
    </div>
    {{# if outgoing }}
        {{{ ImagePreview img=userAvatar imgClass='mini' }}}
    {{/if}}
  </div>
`;
