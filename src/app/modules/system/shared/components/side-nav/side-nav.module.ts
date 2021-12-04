import {NgModule} from '@angular/core';
import {SideNavComponent} from './side-nav.component';
import {SharedModule} from '../../../../../shared/modules/shared.module';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SideNavComponent],
  imports: [SharedModule, MatListModule, MatButtonModule, RouterModule],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule {
}
