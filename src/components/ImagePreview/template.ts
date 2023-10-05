// language=hbs
export default `
  <div class='image-preview {{ imgClass }}'>
    {{# if withAddIcon }}
      {{{ UploadButton onClick=onUpload }}}
    {{/if}}
    {{# if withRemoveIcon }}
      {{{ RemoveButton onClick=onRemove }}}
    {{/if}}
      <img
        class='previewImage {{ imgClass }}'
        src='{{# if img }}{{ createHref img }}{{ else }}{{ createBaseHref 'user.png' }}{{/if}}'
        alt='Загруженное фото'
      />
  </div>
`;
