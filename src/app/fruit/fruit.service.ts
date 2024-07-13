import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Fruit[]>('https://crudapp-angular-server.onrender.com/fruits');
  }

  create(data: Fruit) {
 
    return this.httpClient.post('https://crudapp-angular-server.onrender.com/fruits', data);
  }

  edit(id: number ){
    return this.httpClient.get<Fruit>( `https://crudapp-angular-server.onrender.com/fruits/${id}`);
  }

  update(data: Fruit) {
    return this.httpClient.put<Fruit>(`https://crudapp-angular-server.onrender.com/fruits/${data.id}`, data);
  }

  delete(id: number ){
    return this.httpClient.delete<Fruit>( `https://crudapp-angular-server.onrender.com/fruits/${id}`);
  }


}
