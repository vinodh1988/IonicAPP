import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the FriendsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FriendsProvider Provider');
  }

  getFriends():Observable<Object>{
    let user=localStorage.getItem("user");
    return this.http.get("http://139.59.9.236:8898/rest-api/get-users/"+user);
  }

}
