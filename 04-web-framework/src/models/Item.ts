// Lib
import { Eventing } from './Eventing';
import { Database } from './Database';
import { Attributes } from './Attributes';

export interface ItemProps {
  id?: number;
  name?: string;
  price?: number;
}

export class Item {
  public attributes: Attributes<ItemProps>;

  constructor(
    attributes: ItemProps,
    public events: Eventing = new Eventing(),
    public db: Database<ItemProps> = new Database<ItemProps>(
      'http://localhost:3000/items'
    )
  ) {
    this.attributes = new Attributes<ItemProps>(attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
