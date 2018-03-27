import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import 'rxjs/Rx';


import { User } from '../models/user.model';


@Injectable()
export class ErsService {

  constructor(private http: Http) { }

  public login(username: string, password: string): Observable<User> {
    

   const options = username ? {params: new HttpParams().set('username', username)} :  password ? {params: new HttpParams().set('password', password)}  : {} ;
   // let postData = JSON.stringify(username);
    //window.alert(username);
    return this.http
            .post(`http://localhost:8080/ERS/login.do?username=${username}&password=${password}`,
             null, {params: options} )
            .map((response: Response ) => {
              return <User> response.json();
            })
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

