import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedMaterialModule} from './shared-material.module';
import {SafeHtmlModule} from '../pipes/safe-html/safe-html.module';
import {PreventDefaultModule} from '../directives/prevent-default/prevent-default.module';
import {StopPropagationModule} from '../directives/stop-propagation/stop-propagation.module';
import {InProgressModule} from '../components/in-progress/in-progress.module';

const modules = [
  CommonModule,
  TranslateModule,
  SharedMaterialModule,
  SafeHtmlModule,
  PreventDefaultModule,
  StopPropagationModule,
  InProgressModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {
}
