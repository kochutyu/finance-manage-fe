import {NgModule} from '@angular/core';

import {IntegrationsComponent} from './integrations.component';

import {SharedModule} from '../../../../shared/modules/shared.module';
import {IntegrationsRoutingModule} from './integrations-routing.module';

@NgModule({
  declarations: [IntegrationsComponent],
  imports: [SharedModule, IntegrationsRoutingModule],
})
export class IntegrationsModule {
}
