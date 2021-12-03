import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ELocalStorage} from '../../../core/enums/local-storage.enum';
import {environment} from '../../../../environments/environment';
import {ELocale} from '../../../core/enums/locale.enum';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent implements OnInit {
  languages = environment.translate.languages;
  currentLanguage = environment.translate.defaultLanguage;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.initLanguage();
  }

  selectLanguage(language: ELocale): void {
    if (language) {
      this.translateService.use(language);
      this.currentLanguage = language;
      localStorage.setItem(ELocalStorage.LANGUAGE, JSON.stringify(language));
    }
  }

  private initLanguage(): void {
    const language = JSON.parse(localStorage.getItem(ELocalStorage.LANGUAGE));
    if (!!language) {
      this.translateService.use(language);
      this.currentLanguage = language;
    }
  }
}
