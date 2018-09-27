import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meal, Menu} from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getMenus() {
    console.log(this.http.get<Menu[]>('http://localhost:8080/menus'));
    return this.http.get<Menu[]>('http://localhost:8080/menus');

  }

  getTest() {
    console.log(this.http.get('http://localhost:8080/test'));
    return this.http.get<Meal>('http://localhost:8080/test');

  }
}
