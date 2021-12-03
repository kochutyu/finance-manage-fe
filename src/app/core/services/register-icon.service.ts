import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {ELocale} from '../enums/locale.enum';
import {UA, US} from 'country-flag-icons/string/3x2';

@Injectable({providedIn: 'root'})
export class RegisterIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  initIcons(): void {
    this.initLocales();
  }

  private initLocales(): void {
    this.matIconRegistry.addSvgIconLiteral(
      ELocale.ENGLISH,
      this.domSanitizer.bypassSecurityTrustHtml(US)
    );
    this.matIconRegistry.addSvgIconLiteral(
      ELocale.UKRAINIAN,
      this.domSanitizer.bypassSecurityTrustHtml(UA)
    );
  }
}
