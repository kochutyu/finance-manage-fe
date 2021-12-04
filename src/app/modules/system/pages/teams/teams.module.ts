import {NgModule} from '@angular/core';

import {TeamsComponent} from './teams.component';

import {SharedModule} from '../../../../shared/modules/shared.module';
import {TeamsRoutingModule} from './teams-routing.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [SharedModule, TeamsRoutingModule],
})
export class TeamsModule {
}
