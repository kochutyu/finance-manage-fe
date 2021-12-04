import {NgModule} from '@angular/core';
import {ResetPasswordComponent} from './reset-password.component';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {SharedModule} from '../../../shared/modules/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [SharedModule, ResetPasswordRoutingModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class ResetPasswordModule {
}
