import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';


import 'rxjs/Rx';
import { Employee } from '../models/employee.model';


@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getInfo(userInfo: Employee): Observable<Employee>{
    return this.http
            .post(`http://localhost:8080/ERS/info.do?username=${userInfo.username}`,
          null, {withCredentials: true})
          .map((response: Response) => {
            return <Employee> response.json();
          })
          .catch(this.handleError);
  }

  updateUser(userInfo: Employee): Observable<Employee>{
    //update user info.
    //fix servlet/controller update.do
    console.log(`service: update user method`);
      return this.http
            .post(`http://localhost:8080/ERS/update.do?username=${userInfo.username}&firstname=${userInfo.firstName}&lastname=${userInfo.lastName}&email=${userInfo.email}`,
             null, {withCredentials: true})
            .map((response: Response ) => {
              console.log(response.json());
              return <Employee> response.json();
            })
            .catch(this.handleError);
  }

  logout() {
    console.log("logout-service");
    this.http
        .get(`http://localhost:8080/ERS/logout.do?`,
      {withCredentials: true})
      .catch(this.handleError);
  }

  allEmployees(): Observable<Employee[]> {
    return this.http
            .get(`http://localhost:8080/ERS/allEmployees.do`,
          {withCredentials: true})
          .map((response: Response) => {
            return <Employee> response.json();
          })
          .catch(this.handleError);
  }
}
