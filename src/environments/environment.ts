// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ELocale} from '../app/core/enums/locale.enum';
import {MissingTranslationHandler, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../app/app.module';
import {TranslateMissingKeyService} from '../app/core/services/translate-missing-key.service';

export const environment = {
  production: false,
  apiUrl: '',
  api: {
    url: 'http://localhost:1000/api/',
  },
  notify: {
    duration: 5000
  },
  translate: {
    defaultLocale: ELocale.ENGLISH,
    locales: [ELocale.ENGLISH, ELocale.UKRAINIAN],
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
  skipEndpoints: ['./assets/']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
