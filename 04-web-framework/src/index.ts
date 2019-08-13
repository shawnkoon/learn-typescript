import { Item } from './models/Item';
import axios from 'axios';

const item = new Item({ name: 'laptop', price: 123 });

console.log(item.get('name'));
console.log(item.get('price'));

item.set({ name: 'bike', price: 999 });

console.log(item.get('name'));
console.log(item.get('price'));

item.on('click', () => console.log('Click #1'));
item.on('click', () => console.log('Click #2'));
item.on('save', () => console.log('Save #1'));

console.log(item);
item.trigger('click');

axios.post('http://localhost:3000/items', {
  name: item.get('name'),
  price: item.get('price'),
});
