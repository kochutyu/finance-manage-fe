import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiEndpointInterceptor implements HttpInterceptor {
  intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipApiEndpointConcat = environment.skipEndpoints.some(endpoint => req.url.includes(endpoint));
    if (!skipApiEndpointConcat) {
      req.url = environment.api.url + req.url;
    }
    return next.handle(req);
  }
}
