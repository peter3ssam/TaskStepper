import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // let id: any = localStorage.getItem('user');
    // if (!id) {
    //   return next.handle(req);
    // }
    // id = JSON.parse(id);
    // let newReq = req.clone({
    //   params: new HttpParams().set('auth', id['idToken']),
    //   // headers: req.headers.append('auth', id['idToken']),
    // });
    // console.log(newReq);
    return next.handle(req);
  }
}
