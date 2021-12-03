import {NgModule} from '@angular/core';
import {NoLoginToolbarComponent} from './no-login-toolbar.component';
import {LanguageSelectModule} from '../../language-select/language-select.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../../modules/shared.module';

@NgModule({
  declarations: [NoLoginToolbarComponent],
  exports: [NoLoginToolbarComponent],
  imports: [LanguageSelectModule, MatToolbarModule, SharedModule],
})
export class NoLoginToolbarModule {
}
