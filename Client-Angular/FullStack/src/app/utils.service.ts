import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persons } from './persons';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get("http://localhost:2000/api/users");
  }

  getUser(id : string) {
    return this.http.get("http://localhost:2000/api/users/"+ id);
  }

  addUser(obj: Persons) {
    return this.http.post("http://localhost:2000/api/users" ,obj)
  }

  updateUser(id: string, obj: Persons) {
    return this.http.put("http://localhost:2000/api/users/" + id , obj)
  }

  deleteUser(id:string) {
    return this.http.delete("http://localhost:2000/api/users/" + id)
  }
}
