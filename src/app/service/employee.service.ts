import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';


import 'rxjs/Rx';
import { User } from '../models/user.model';


@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  updateUser(userInfo: User){
    //update user info.
    //fix servlet/controller update.do
      return this.http
            .post(`http://localhost:8080/ERS/update.do?username=${userInfo.username}
            &firstname=${userInfo.firstName}
            &lastname=${userInfo.lastName}
            &email=${userInfo.email}`,
             null)
            .map((response: Response ) => {
              return <User> response.json();
            })
            .catch(this.handleError);
  }
}
