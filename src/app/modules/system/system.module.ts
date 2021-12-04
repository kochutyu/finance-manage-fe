import {NgModule} from '@angular/core';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import {LoginToolbarModule} from "../../shared/components/toolbar/login-toolbar/login-toolbar.module";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../../shared/modules/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {SideNavModule} from "./shared/components/side-nav/side-nav.module";

@NgModule({
  declarations: [SystemComponent],
  imports: [SystemRoutingModule, LoginToolbarModule, MatCardModule, RouterModule, MatSidenavModule, SharedModule, MatButtonModule, SideNavModule],
})
export class SystemModule {
}
