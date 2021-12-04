import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

import {SignUpComponent} from './sign-up.component';

import {SharedModule} from '../../../shared/modules/shared.module';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {
  ControlMessageInvalidModule
} from '../../../shared/components/control-message-invalid/control-message-invalid.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    SharedModule,
    SignUpRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ControlMessageInvalidModule,
  ],
})
export class SignUpModule {
}
