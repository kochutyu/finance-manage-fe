import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up.component';

import {SharedModule} from '../../../shared/modules/shared.module';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [SignUpComponent],
  imports: [SharedModule, SignUpRoutingModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class SignUpModule {
}
