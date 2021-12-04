import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedMaterialModule} from './shared-material.module';
import {SafeHtmlModule} from '../pipes/safe-html/safe-html.module';

const modules = [
  CommonModule,
  TranslateModule,
  SharedMaterialModule,
  SafeHtmlModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {
}
