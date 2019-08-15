import { Item } from './models/Item';

/**
 * GET & PUT
 */
const item = new Item({ id: 1 });

console.log(item.get('id'));

item.on('click', () => {
  console.log('User updated.');
});

item.trigger('click');
