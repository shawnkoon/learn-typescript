import { Item } from './models/Item';

/**
 * GET & PUT
 */
const item = new Item({ id: 1 });

item.fetch();
item.set({ name: 'Air Filter', price: 17.85 });
item.save(); // PUT

/**
 * POST
 */
const item2 = new Item({ name: 'Bullet proof backpack', price: 45.23 });
item2.save(); // POST

/**
 * Eventing delegation
 */
item2.events.on('click', () => {
  console.log('I am Click Event!');
});

item2.events.trigger('click');
