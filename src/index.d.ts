declare module '*.hbs' {
  const template: string;
  export default template;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

export default void 0;
