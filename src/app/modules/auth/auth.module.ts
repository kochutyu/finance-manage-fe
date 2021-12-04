import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NoLoginToolbarModule} from "../../shared/components/toolbar/no-login-toolbar/no-login-toolbar.module";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AuthComponent],
  imports: [AuthRoutingModule, NoLoginToolbarModule, RouterModule, MatCardModule],
})
export class AuthModule {
}
