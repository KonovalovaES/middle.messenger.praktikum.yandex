// language=hbs
export default `
  <div class='chat-space{{# if (isAnyChatOpen open_chat_id) }} chat-space_with-chat{{
  else }} chat-space_without-chat{{/ if }}'>
    {{# if open_chat_id }}
      {{{ Chat ref='chat'
        members=(isCountMembersShow users)
        avatar=(getChatAvatar open_chat_id)
        title=(getChatTitle open_chat_id)
        messageGroups=(getGroupMessagesByDate chat)
        messageGroupsOrder=(normalizeMessageGroupsOrder (getGroupMessagesByDate chat))
        showMembersMenu=showMembersMenu
        showFilesMenu=showFilesMenu
        showRemoveUserModal=showRemoveUserModal
        showAddUserModal=showAddUserModal
        fields=fields
        showMembers=showMembers
        users=users
        showAvatarLoadModal=showAvatarLoadModal
        onSend=onSend
        onAddUser=onAddUser
      }}}
    {{ else }}
      {{{ WithoutChat }}}
    {{/ if }}
  </div>
`;
