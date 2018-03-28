import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';


import 'rxjs/Rx';


@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }




  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
