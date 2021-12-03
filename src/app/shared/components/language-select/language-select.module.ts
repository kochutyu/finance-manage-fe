import {NgModule} from '@angular/core';
import {LanguageSelectComponent} from './language-select.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {SharedModule} from '../../modules/shared.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LanguageSelectComponent],
  imports: [
    MatButtonToggleModule,
    SharedModule,
    MatChipsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [LanguageSelectComponent],
})
export class LanguageSelectModule {
}
