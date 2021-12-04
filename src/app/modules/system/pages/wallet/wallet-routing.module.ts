import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WalletComponent} from './wallet.component';

const routes: Routes = [{path: '', component: WalletComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WalletRoutingModule {
}
