// language=hbs
export default `
  <div class='menu menu_members-list'>
    <ul class='menu__list'>
      <li class='menu__item menu__item_hover'>
        {{{ AddIcon className='icon_blue' }}}
        <span class='menu__title'>Добавить пользователя</span>
      </li>
      <li class='menu__item'>
        <div class='chat-item__divider'/>
      </li>
        {{# each users }}
          <li class='menu__item'>
          {{{ RemoveIcon className='icon_blue' }}}
          <div class='user-info'>
            <span class='menu__title'>{{ this.display_name }}</span>
            <span class='menu__label'>{{ this.login }}</span>
          </div>
        </li>
      {{/each}}
    </ul>
  </div>
`;
