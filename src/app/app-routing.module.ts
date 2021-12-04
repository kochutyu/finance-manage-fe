import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {GuestGuard} from './core/guards/guest.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    canLoad: [GuestGuard],
    canActivateChild: [GuestGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'system',
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./modules/system/system.module').then((m) => m.SystemModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
