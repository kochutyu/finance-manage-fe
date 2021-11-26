import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';

import {ApiEndpointInterceptor} from './core/interceptors/api-endpoint.interceptor';
import {NotifyInterceptor} from './core/interceptors/notify.interceptor';
import {TokenInterceptor} from './core/interceptors/token.interceptor';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    TranslateModule.forRoot(environment.translate.forRoot),
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiEndpointInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
