import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedMaterialModule} from './shared-material.module';

const modules = [CommonModule, TranslateModule, SharedMaterialModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedModule {
}
