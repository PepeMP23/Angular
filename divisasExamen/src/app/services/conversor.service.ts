import { Injectable } from '@angular/core';
import { ICurrency } from '../interface/currency';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  urlApi: string = 'https://us-central1.gcp.data.mongodb-api.com/app/mtwdm-drwqq/endpoint/unit/converter';
  constructor() { }

  getDivisas(): Promise<ICurrency[]> {
    return fetch(`${this.urlApi}`)
    .then(response => response.json());
  }

}
