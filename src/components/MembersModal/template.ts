// language=hbs
export default `
  <div class='menu menu_members-list'>
    <ul class='menu__list'>
      {{{ MembersAddItem }}}
      <li class='menu__item'>
        <div class='chat-item__divider'/>
      </li>
        {{# each users }}
          {{{ MembersRemoveItem
            id=this.id
            login=this.login
            display_name=(getName this.display_name this.first_name this.second_name)
          }}}
      {{/each}}
    </ul>
  </div>
`;
