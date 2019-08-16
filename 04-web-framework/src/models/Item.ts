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

  isExpensive(): boolean {
    return this.get('price') > 100;
  }

  static buildItemCollection(): Collection<Item, ItemProps> {
    return new Collection<Item, ItemProps>(Item.baseUrl, Item.buildItem);
  }
}
