// language=hbs
export default `
  <div class='chat-info'>
    {{{ Avatar avatar=avatar avatarClass='avatar_mini' }}}
    <div class='chat-info__data'>
      <div class='chat-info__title'>{{ title }}</div>
      {{# if (isCountMembersShow users) }}
        <div class='chat-info__members-count'>{{ getMembers (isCountMembersShow users) }}</div>
      {{/ if }}
    </div>
  </div>
`;
