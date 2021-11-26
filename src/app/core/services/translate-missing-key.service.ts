import {Injectable} from '@angular/core';
import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

@Injectable()
export class TranslateMissingKeyService implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): string {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}
