import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ELocalStorage} from '../enums/local-storage.enum';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authRequest = request.clone({
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });

    const token = JSON.parse(localStorage.getItem(ELocalStorage.TOKEN));
    if (!!token) {
      authRequest = request.clone({
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', token)
      });
    }

    return next.handle(authRequest);
  }
}
