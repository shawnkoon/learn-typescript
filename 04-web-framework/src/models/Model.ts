import { AxiosPromise, AxiosResponse } from 'axios';

interface AttributeProps<T> {
  set(newAttribute: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface DatabaseProps<T> {
  fetch(id: number): AxiosPromise;
  save(newData: T): AxiosPromise;
}

interface EventingProps {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: AttributeProps<T>,
    private db: DatabaseProps<T>,
    private events: EventingProps
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(newItem: T): void {
    this.attributes.set(newItem);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (id === undefined) {
      throw new Error('Cannot fetch without an id');
    }

    this.db.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    this.db.save(this.attributes.getAll()).then(
      (response: AxiosResponse): void => {
        this.trigger('save');
      }
    );
  }
}
