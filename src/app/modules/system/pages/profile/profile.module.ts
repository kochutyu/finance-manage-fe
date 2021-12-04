import {NgModule} from '@angular/core';

import {ProfileComponent} from './profile.component';

import {SharedModule} from '../../../../shared/modules/shared.module';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {UploadImageModule} from "../../shared/components/upload-image/upload-image.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule, MatGridListModule, MatCardModule, MatButtonModule, UploadImageModule],
})
export class ProfileModule {
}
