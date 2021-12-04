import {ELocale} from '../app/core/enums/locale.enum';
import {MissingTranslationHandler, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../app/app.module';
import {TranslateMissingKeyService} from '../app/core/services/translate-missing-key.service';

export const environment = {
  production: false,
  api: {
    url: 'http://localhost:2000/api/',
  },
  notify: {
    duration: 5000,
    triggerDelay: 2000
  },
  translate: {
    defaultLanguage: ELocale.ENGLISH,
    languages: [ELocale.ENGLISH, ELocale.UKRAINIAN],
    forRoot: {
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: TranslateMissingKeyService},
      defaultLanguage: ELocale.ENGLISH,
    }
  },
  skipEndpoints: ['./assets/', 'purecatamphetamine.github.io']
};
