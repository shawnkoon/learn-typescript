// Lib
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, P> {
  private models: T[] = [];
  private events: Eventing = new Eventing();

  constructor(private baseUrl: string, private deserialize: (json: P) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.baseUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: P) => {
        const model = this.deserialize(value);
        this.models.push(model);
      });
      this.trigger('fetch');
    });
  }
}
