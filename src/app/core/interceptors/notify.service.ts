import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, map, tap} from 'rxjs/operators';
import {Notify} from '../interfaces/notify';
import {environment} from '../../../environments/environment';
import {NotifyTypeEnum} from '../enums/notify-type.enum';

@Injectable()
export class NotifyService implements HttpInterceptor {

  constructor(
    private matSnackBar: MatSnackBar
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const {duration} = environment.notify;
    const request = req.clone();
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          const notify: Notify = err.error;
          if (notify.type === NotifyTypeEnum.TOASTR_ERROR) {
            this.matSnackBar.open(notify.message, notify.type, {panelClass: 'snack-error', duration});
          }
          return notify.body;
        }
        return of(err);
      }),
      map(evt => {
        if (evt instanceof HttpResponse) {
          const notify: Notify = evt.body;
          if (notify.type === NotifyTypeEnum.TOASTR_SUCCESS) {
            this.matSnackBar.open(notify.message, notify.type, {panelClass: 'snack-success', duration});
          }
          return notify.body;
        }
        return evt;
      }),
      tap((res) => {
        console.log(res);
      })
    );
  }
}
