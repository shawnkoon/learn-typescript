import { Item } from './models/Item';

/**
 * GET & PUT
 */
const item = Item.buildItem({ id: 1, name: 'shawnkoon gift', price: 123.45 });

console.log('id:', item.get('id'));

item.on('change', () => {
  console.log('Item Updated', item);
});

item.on('save', () => {
  console.log('Item Saved', item);
});

item.on('click', () => {
  console.log('Click Event Triggered!!');
});

item.trigger('click'); // shouldn't do anything.

item.save();
item.fetch();

console.log('Is this item expensive?', item.isExpensive());
