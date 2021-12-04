import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'home'},
      {
        path: '',
        data: {breadcrumb: 'home'},
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'sign-up',
        data: {breadcrumb: 'sign-up'},
        loadChildren: () =>
          import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: 'sign-in',
        data: {breadcrumb: 'sign-in'},
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: 'reset-password',
        data: {breadcrumb: 'reset-password'},
        loadChildren: () =>
          import('./reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {
}
