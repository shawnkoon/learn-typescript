export interface ItemProps {
  name?: string;
  price?: number;
}

type Callback = () => void;

export class Item {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: ItemProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: ItemProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}
