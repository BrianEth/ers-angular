import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();
    headers.append('JSESSIONID', '<jsessionid>');

    // Clone the request and set the new header in one step.
    const authReq = req.clone({
        headers,
        withCredentials: true
    });
    return next.handle(authReq);
  }
}