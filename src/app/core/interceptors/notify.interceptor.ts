import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, tap} from 'rxjs/operators';
import {INotify} from '../interfaces/notify.interface';
import {environment} from '../../../environments/environment';
import {ENotifyType} from '../enums/notify-type.enum';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {

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
          const notify: INotify = err.error;
          if (notify.type === ENotifyType.TOASTR_ERROR) {
            this.matSnackBar.open(notify.message, notify.type, {panelClass: 'snack-error', duration});
          }
        }
        return throwError(err);
      }),
      tap(evt => {
        if (evt instanceof HttpResponse) {
          const notify: INotify = evt.body;
          if (notify.type === ENotifyType.TOASTR_SUCCESS) {
            this.matSnackBar.open(notify.message, notify.type, {panelClass: 'snack-success', duration});
          }
        }
      })
    );
  }
}
