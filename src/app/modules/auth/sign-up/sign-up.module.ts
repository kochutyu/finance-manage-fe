import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up.component';

import {SharedModule} from '../../../shared/modules/shared.module';
import {SignUpRoutingModule} from './sign-up-routing.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [SharedModule, SignUpRoutingModule],
})
export class SignUpModule {
}
