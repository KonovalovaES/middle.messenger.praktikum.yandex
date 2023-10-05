// language=hbs
export default `
  <div class='header header_profile'>
    {{{ ImageInput
      avatar=avatar
      withAddIcon=isEditProfileOpen
      withRemoveIcon=(and isEditProfileOpen avatar)
      onChange=onAvatarChange
    }}}
    <p class='header__title'>{{ display_name }}</p>
  </div>
`;
