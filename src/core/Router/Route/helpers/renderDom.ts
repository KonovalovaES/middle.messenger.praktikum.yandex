import Block from '../../../Block/Block';

const render = (query: string, block: Block) => {
  const root = document.querySelector(query);

  if (root !== null) {
    const content = block.getContent();

    if (content) {
      root.appendChild(content);
    }
  }

  return root;
};

export default render;
