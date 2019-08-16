import { View } from './View';
import { Item, ItemProps } from '../models/Item';

export class ItemComponent extends View<Item, ItemProps> {
  template(): string {
    return `
      <div>
        <h1>Item</h1>
        <div>Item name: ${this.model.get('name')}</div>
        <div>Item price: $${this.model.get('price')}</div>
      </div>
    `;
  }
}
