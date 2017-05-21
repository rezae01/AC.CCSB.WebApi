import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MenuItems } from '../shared/menu-items/menu-items';
import {UserViewModel} from './Menu2';
import {Observable} from 'rxjs';
import {post} from './post';

@Injectable()
export class UserService {
  list: any;
  constructor(private http: Http) { }

  Crtableuser(): Observable <post[]> {

    return this.http.get('http://localhost:1920/api/Caretable/CartableUser', this.jwt()).map(res => res.json());
  }


  private jwt() {
    // create authorization header with jwt token
   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
      return new RequestOptions({ headers: headers });
    }
  }
}
