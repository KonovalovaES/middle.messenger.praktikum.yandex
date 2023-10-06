// language=hbs

export default `
  <div class='info'>
    {{# unless search }}
      {{# if time }}
          <div class='info__time'>{{ getChatTime time }}</div>
      {{/if}}
    {{/ unless }}
    {{# if (getNewMessagesCount id unreadCount) }}
      <div class='info__new-messages{{# if search }} info__new-messages_search{{/ if }}'>
        {{ getNewMessagesCount id unreadCount }}
      </div>
    {{/ if }}
  </div>
`;
