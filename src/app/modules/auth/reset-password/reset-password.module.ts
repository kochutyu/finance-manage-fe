import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {ResetPasswordComponent} from './reset-password.component';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {SharedModule} from '../../../shared/modules/shared.module';
import {
  ControlMessageInvalidModule
} from '../../../shared/components/control-message-invalid/control-message-invalid.module';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    SharedModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ControlMessageInvalidModule,
  ],
})
export class ResetPasswordModule {
}
