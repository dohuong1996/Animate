import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authorizationString = '';
    let authorizationToken = req.headers.get("Authorization")
    let headers;
    if (authorizationToken) {
      headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', authorizationToken);
    }
    return next.handle(req.clone({
      headers: headers
    })).do((event: HttpEvent<any>) => {

    });
  }
}
