import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from '@angular/common/http';
import {Observable, throwError, timer} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, tap} from 'rxjs/operators';
import {INotify} from '../interfaces/notify.interface';
import {ENotifyType} from '../enums/notify-type.enum';
import {ToasrtService} from '../services/toasrt.service';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private matSnackBar: MatSnackBar, private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const request = req.clone();
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          const notify: INotify = err.error;
          if (notify.type === ENotifyType.TOASTR_ERROR) {
            timer(0).subscribe(() => {
              this.injector
                .get(ToasrtService)
                .error(`NOTIFY.${notify.message}`);
            });
          }
        }
        return throwError(err);
      }),
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          const notify: INotify = evt.body;
          if (notify.type === ENotifyType.TOASTR_SUCCESS) {
            timer(0).subscribe(() => {
              this.injector
                .get(ToasrtService)
                .success(`NOTIFY.${notify.message}`);
            });
          }
        }
      })
    );
  }
}
