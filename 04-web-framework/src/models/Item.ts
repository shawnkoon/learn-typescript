// Lib
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Database } from './Database';
import { Collection } from './Collection';

export interface ItemProps {
  id?: number;
  name?: string;
  price?: number;
}

export class Item extends Model<ItemProps> {
  static baseUrl = 'http://localhost:3000/items';

  static buildItem(attrs: ItemProps): Item {
    return new Item(
      new Attributes<ItemProps>(attrs),
      new Database<ItemProps>(Item.baseUrl),
      new Eventing()
    );
  }

  static buildItemCollection(): Collection<Item, ItemProps> {
    return new Collection<Item, ItemProps>(Item.baseUrl, Item.buildItem);
  }

  isExpensive(): boolean {
    const price = this.get('price');

    if (price) {
      return price > 100;
    }

    throw new Error('Price is not a number.');
  }

  setRandomPrice(): void {
    const price = Number(Number(Math.random() * 500).toFixed(2));
    this.set({ price });
  }
}
