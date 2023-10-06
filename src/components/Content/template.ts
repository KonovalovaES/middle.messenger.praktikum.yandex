// language=hbs
export default `
  <div class='content'>
    <div class='content__title{{# if search }} content__title_search{{/ if }}'>{{ title }}</div>
    {{# unless search }}
      {{# if content }}
        <p class='content__text'>
          {{# if (isCurrentUserByLogin login) }}
            <span class='content__author'>Вы: </span>
          {{ else }}
            <span class='content__author'>{{ getNameByLogin login id }}: </span>
          {{/ if }}
          {{ content }}
        </p>
      {{/if}}
    {{/ unless }}
  </div>
`;
