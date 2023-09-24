// language=hbs
export default `
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
`;
