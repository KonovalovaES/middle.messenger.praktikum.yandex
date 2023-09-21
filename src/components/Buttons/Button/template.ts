// language=hbs
export default `
  <button class='{{ type }}-button{{# if className }} {{ className }}{{/ if }}'>
    {{ title }}
  </button>
`;
