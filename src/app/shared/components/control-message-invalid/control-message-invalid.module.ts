import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlMessageInvalidComponent} from './control-message-invalid.component';
import {SharedModule} from "../../modules/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    ControlMessageInvalidComponent
  ],
  exports: [
    ControlMessageInvalidComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule
  ]
})
export class ControlMessageInvalidModule {
}
