// language=hbs
export default `
    <li class='menu__item'>
        {{{ RemoveIcon className='icon_blue' }}}
        <div class='user-info'>
            <span class='menu__title'>{{ display_name }}</span>
            <span class='menu__label'>{{ login }}</span>
        </div>
    </li>
`;
