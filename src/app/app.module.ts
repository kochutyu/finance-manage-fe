import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {AppRoutingModule} from './app-routing.module';

import {ApiEndpointService} from './core/interceptors/api-endpoint.service';
import {NotifyService} from './core/interceptors/notify.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiEndpointService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: NotifyService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
