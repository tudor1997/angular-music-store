import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  
  getAll(){
    return this.db.list('/categories', ref => {
      return ref.orderByChild('type');
    });
  }
  getGuitars(){
    return this.db.list('/guitars', ref => {
      return ref.orderByChild('value');
    });
  }
}
