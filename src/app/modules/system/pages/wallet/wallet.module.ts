import {NgModule} from '@angular/core';

import {WalletComponent} from './wallet.component';

import {WalletRoutingModule} from './wallet-routing.module';
import {SharedModule} from '../../../../shared/modules/shared.module';

@NgModule({
  declarations: [WalletComponent],
  imports: [SharedModule, WalletRoutingModule],
})
export class WalletModule {
}
