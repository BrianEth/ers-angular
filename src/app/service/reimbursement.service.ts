import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import 'rxjs/Rx';

import { Reimbursement } from '../models/reimbursement.model';
import { ReimbursementType } from '../models/reimbursementType.model';

@Injectable()
export class ReimbursementService {

  constructor(private http: Http) { }




  public submitReimbursement(amount: number, description: string, type: ReimbursementType) {

    // const options = username ? {params: new HttpParams().set('username', username)} :  password ? {params: new HttpParams().set('password', password)}  : {} ;
     //type cast?
    const options = amount ? {params: new HttpParams().set('amount', amount.toString())}
     : description ? {params: new HttpParams().set('description', description)} 
     : type ? {params: new HttpParams().set('type', type.toString())} : {};
 
     return this.http
             .post(`http://localhost:8080/ERS/login.do?amount=${amount}&description=${description}&type=${type}`,
             null, {params: options} )
             .map((response: Response) => {
               return <Reimbursement> response.json();
             })
             .catch(this.handleError);
   }
   private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
 
}
