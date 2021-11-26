import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';
import {ELocalStorage} from '../enums/local-storage.enum';

@Injectable({providedIn: 'root'})
export class TranslateInitService {
  constructor(private translateService: TranslateService) {
  }

  public initLocale(): void {
    const locale = JSON.parse(localStorage.getItem(ELocalStorage.LOCALE));
    const currencyLocale = locale ? locale : environment.translate.forRoot.defaultLanguage;
    this.translateService.use(currencyLocale);
    localStorage.setItem(ELocalStorage.LOCALE, JSON.stringify(currencyLocale));
  }
}
