import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';

import {SharedModule} from '../../../../shared/modules/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {
}
