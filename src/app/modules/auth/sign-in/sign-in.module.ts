import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {SignInComponent} from './sign-in.component';

import {SignInRoutingModule} from './sign-in-routing.module';
import {SharedModule} from '../../../shared/modules/shared.module';
import {
  ControlMessageInvalidModule
} from '../../../shared/components/control-message-invalid/control-message-invalid.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SharedModule,
    SignInRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    ControlMessageInvalidModule,
  ],
})
export class SignInModule {
}
