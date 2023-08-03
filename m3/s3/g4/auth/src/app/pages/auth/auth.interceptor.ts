import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import { IAccessData } from './interfaces/access-data';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authSvc: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


   return this.authSvc.user$.pipe(take(1), switchMap((user:IAccessData | null) => {

     if(!user)
     return next.handle(request);

     const newRequest = request.clone({
      headers: request.headers.append('Authorization',`Bearer ${user.accessToken}`)
     })
     return next.handle(newRequest);

  }))






  }
}
function switchMap(arg0: (user: any) => void): import("rxjs").OperatorFunction<import("./interfaces/access-data").IAccessData | null, HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

