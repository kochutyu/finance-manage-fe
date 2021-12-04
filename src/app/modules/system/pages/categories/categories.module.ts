import {NgModule} from '@angular/core';

import {CategoriesComponent} from './categories.component';

import {SharedModule} from '../../../../shared/modules/shared.module';
import {CategoriesRoutingModule} from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [SharedModule, CategoriesRoutingModule],
})
export class CategoriesModule {
}
