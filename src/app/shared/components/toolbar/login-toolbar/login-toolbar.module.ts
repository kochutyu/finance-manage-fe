import {NgModule} from '@angular/core';
import {LoginToolbarComponent} from './login-toolbar.component';
import {LanguageSelectModule} from '../../language-select/language-select.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../../modules/shared.module';

@NgModule({
  declarations: [LoginToolbarComponent],
  exports: [LoginToolbarComponent],
  imports: [LanguageSelectModule, MatToolbarModule, SharedModule],
})
export class LoginToolbarModule {
}
