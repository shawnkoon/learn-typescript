// Lib
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Database } from './Database';

export interface ItemProps {
  id?: number;
  name?: string;
  price?: number;
}

export class Item extends Model<ItemProps> {
  static buildItem(attrs: ItemProps): Item {
    return new Item(
      new Attributes<ItemProps>(attrs),
      new Database<ItemProps>('http://localhost:3000/items'),
      new Eventing()
    );
  }

  isExpensive(): boolean {
    return this.get('price') > 100;
  }
}
