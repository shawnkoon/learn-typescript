import { ItemContainer } from './views/ItemContainer';
import { Item } from './models/Item';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if (root) {
    const container = new ItemContainer(
      root,
      Item.buildItem({ name: 'Fan', price: 12.3 })
    );

    container.render();

    console.log('container', container);
  } else {
    throw new Error('Root element is not present.');
  }
});
