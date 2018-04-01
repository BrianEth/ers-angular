import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import 'rxjs/Rx';

import { Reimbursement } from '../models/reimbursement.model';
import { ReimbursementType } from '../models/reimbursementType.model';

@Injectable()
export class ReimbursementService {

  constructor(private http: Http) {
    let session = new Headers({'JSESSIONID': 'asdfasg'});
    console.log(session);
    this.options = new RequestOptions({headers: session});
  }

  private options: RequestOptions;


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  public submitReimbursement(amount: number, description: string, type: ReimbursementType) {

     return this.http
             .post(`http://localhost:8080/ERS/submitReimbursement.do?amount=${amount}&description=${description}&type=${type}`,
             null,{withCredentials: true })
             .map((response: Response) => {
               return <Reimbursement> response.json();
             })
             .catch(this.handleError);
   }

   public debugReimbursement(): Observable<Reimbursement> {

    return this.http
            .get(`http://localhost:8080/ERS/debugReimbursement.do?id=1`,
          {withCredentials: true})
          .map((response: Response) => {
            console.log("in service: " + <Reimbursement> response.json());
            return <Reimbursement> response.json();
          })
          .catch(this.handleError);
   }


   public getPendingHistory(): Observable<Reimbursement[]> {

    return this.http
            .post(`http://localhost:8080/ERS/history.do?requestType=pending`,
            null,{withCredentials: true })
            .map((response: Response) => {
              console.log("response " +response.json());
              return <Reimbursement[]> response.json();
            });

   }


   public getAllPendingHistory(): Observable<Reimbursement[]> {

    return this.http
            .post(`http://localhost:8080/ERS/history.do?requestType=allPending`,
            null,{withCredentials: true })
            .map((response: Response) => {
              console.log("response " +response.json());
              return <Reimbursement[]> response.json();
            });

   }
   public getFinalizedHistory(): Observable<Reimbursement[]> {

    return this.http
            .post(`http://localhost:8080/ERS/history.do?requestType=finalized`,
            null,{withCredentials: true })
            .map((response: Response) => {
              console.log("response " +response.json());
              return <Reimbursement[]> response.json();
            })
            .catch(this.handleError);

   }
 
   public getAllFinalizedHistory(): Observable<Reimbursement[]> {

    return this.http
            .post(`http://localhost:8080/ERS/history.do?requestType=allResolved`,
            null,{withCredentials: true })
            .map((response: Response) => {
              console.log("response " +response.json());
              return <Reimbursement[]> response.json();
            })
            .catch(this.handleError);

   }

   public finalizeReimbursement(id: number, status: number): Observable<String> {
     return this.http
            .post(`http://localhost:8080/ERS/finalize.do?id=${id}&status=${status}`,
            null,{withCredentials: true })
            .map((response: Response) => {
              return response.json();
            })
            .catch(this.handleError);
   }

}
