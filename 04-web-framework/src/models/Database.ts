// Lib
import axios, { AxiosPromise } from 'axios';

interface DbRecord {
  id?: number;
}

export class Database<T extends DbRecord> {
  constructor(public baseUrl: string) {}

  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (id) {
      // put
      return axios.put(`${this.baseUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.baseUrl, data);
    }
  }

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.baseUrl}/${id}`);
  }
}
