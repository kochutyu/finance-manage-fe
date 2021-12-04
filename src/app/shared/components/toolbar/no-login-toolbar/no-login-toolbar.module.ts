import {NgModule} from '@angular/core';
import {NoLoginToolbarComponent} from './no-login-toolbar.component';
import {LanguageSelectModule} from '../../language-select/language-select.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../../modules/shared.module';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [NoLoginToolbarComponent],
  exports: [NoLoginToolbarComponent],
  imports: [LanguageSelectModule, MatToolbarModule, SharedModule, MatButtonModule, RouterModule],
})
export class NoLoginToolbarModule {
}
