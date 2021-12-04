import {NgModule} from '@angular/core';
import {SignInComponent} from './sign-in.component';

import {SignInRoutingModule} from './sign-in-routing.module';
import {SharedModule} from '../../../shared/modules/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [SharedModule, SignInRoutingModule],
})
export class SignInModule {
}
