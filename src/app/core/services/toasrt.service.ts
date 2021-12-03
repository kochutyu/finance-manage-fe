import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import {timer} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ToasrtService {
  constructor(
    private matSnackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
  }

  error(message: string = ''): void {
    this.openToasrt(message, 'TOASTR.ERROR', 'snack-error');
  }

  success(message: string = ''): void {
    this.openToasrt(message, 'TOASTR.SUCCESS', 'snack-success');
  }

  trigger(fn): void {
    if (fn) {
      timer(environment.notify.triggerDelay).subscribe(() => fn());
    }
  }

  private openToasrt(
    message: string,
    action: string,
    panelClass: string
  ): void {
    this.matSnackBar.open(
      this.translateService.instant(message),
      this.translateService.instant(action),
      {
        panelClass,
        duration: environment.notify.duration,
      }
    );
  }
}
