import {NgModule} from '@angular/core';

import {StopPropagationDirective} from './stop-propagation.directive';

@NgModule({
  declarations: [StopPropagationDirective],
  exports: [StopPropagationDirective],
})
export class StopPropagationModule {
}
