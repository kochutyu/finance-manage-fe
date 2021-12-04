import {NgModule} from '@angular/core';

import {PreventDefaultDirective} from './prevent-default.directive';

@NgModule({
  declarations: [PreventDefaultDirective],
  exports: [PreventDefaultDirective],
})
export class PreventDefaultModule {
}
