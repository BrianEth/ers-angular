import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import 'rxjs/Rx';


import { Employee } from '../models/employee.model';


@Injectable()
export class LoginService {

  constructor(private http: Http) {
    let session = new Headers({'JSESSIONID': 'asdfasg'});
    console.log(session);
    this.options = new RequestOptions({headers: session});

    window.sessionStorage.setItem('loggedUser', null);
    window.sessionStorage.setItem('userFirstName', null);

    // this.headers = new HttpHeaders();
    // this.headers.append('JSESSIONID','asfassdfhj');
   }

  private options: RequestOptions;
   private headers;

  public login(username: string, password: string): Observable<Employee> {
    

  //  const options = username ? {params: new HttpParams().set('username', username)} 
  //  :  password ? {params: new HttpParams().set('password', password)}  : {} ;
   
    return this.http
            .post(`http://localhost:8080/ERS/login.do?username=${username}&password=${password}`,
             null, {withCredentials: true} )
            .map((response: Response ) => {
              return <Employee> response.json();
            })
            .catch(this.handleError);
  }

  


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

