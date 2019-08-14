// Lib
import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export interface ItemProps {
  id?: number;
  name?: string;
  price?: number;
}

export class Item {
  constructor(private data: ItemProps, public events: Eventing = new Eventing()) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: ItemProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/items/${this.get('id')}`).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      // put
      axios.put(`http://localhost:3000/items/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/items`, this.data);
    }
  }
}
