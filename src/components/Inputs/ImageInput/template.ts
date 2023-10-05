// language=hbs
export default `
  <div class='custom-file-upload'>
    {{{ FilesInput onChange=onChange }}}
    {{{ ImagePreview
      img=avatar
      withAddIcon=withAddIcon
      withRemoveIcon=withRemoveIcon
      iconClass='icon_blue'
      onUpload=onUpload
      onRemove=onRemove
    }}}
    {{{ ErrorMessage errorText=errorText }}}
  </div>
`;
