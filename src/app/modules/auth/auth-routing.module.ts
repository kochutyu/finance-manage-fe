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
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {
}
